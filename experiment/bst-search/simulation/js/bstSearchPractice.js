// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY David Galles ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// Class to keep track of pointer and search things:

const displayComment = function displayComment(str) {
  document.getElementById("ins").innerHTML = str;
};

class trackThings {
  constructor() {
    this.nodeTrack = null;
    this.rightOrLeft = null;
    this.val = null;
    this.problems = ["05", "01", "19", "29", "21"];
    this.problemTrack = 0;
  }
}

let demoTrack = new trackThings();

// Constants.

BST.LINK_COLOR = "#000000";
BST.HIGHLIGHT_CIRCLE_COLOR = "#000000";
BST.FOREGROUND_COLOR = "#000000";
BST.BACKGROUND_COLOR = "#FFFFFF";
BST.PRINT_COLOR = BST.FOREGROUND_COLOR;

BST.WIDTH_DELTA = 50;
BST.HEIGHT_DELTA = 50;
BST.STARTING_Y = 50;

BST.FIRST_PRINT_POS_X = 50;
BST.PRINT_VERTICAL_GAP = 20;
BST.PRINT_HORIZONTAL_GAP = 50;

BST.DATA = [
  16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13,
  15, 17, 19, 21, 23, 25, 27, 29, 31,
];

function BST(am, w, h) {
  this.init(am, w, h);
}

BST.prototype = new Algorithm();
BST.prototype.constructor = BST;
BST.superclass = Algorithm.prototype;

BST.prototype.init = function (am, w, h) {
  var sc = BST.superclass;
  this.startingX = w / 2;
  this.first_print_pos_y = h - 2 * BST.PRINT_VERTICAL_GAP;
  this.print_max = w - 10;

  var fn = sc.init;
  fn.call(this, am);
  this.addControls();
  this.nextIndex = 0;
  this.commands = [];
  this.cmd("CreateLabel", 0, "", 20, 10, 0);
  this.nextIndex = 1;
  this.animationManager.StartNewAnimation(this.commands);
  this.animationManager.skipForward();
  this.animationManager.clearHistory();
  // Ensure Start button is visible and Next is hidden on load
  var startBtn = document.getElementById("bst-demo-start-btn");
  var nextBtn = document.getElementById("bst-demo-next-btn");
  if (startBtn) startBtn.style.display = "inline-block";
  if (nextBtn) nextBtn.style.display = "none";
};

BST.prototype.addControls = function () {
  this.insertField = document.getElementById("bst-demo-insert-text");
  this.insertField.onkeydown = this.returnSubmit(
    this.insertField,
    this.insertCallback.bind(this),
    4
  );
  this.insertButton = document.getElementById("bst-demo-insert-btn");
  this.insertButton.onclick = this.insertCallback.bind(this);
  this.findField = document.getElementById("bst-demo-insert-text");
  this.findField.onkeydown = this.returnSubmit(
    this.findField,
    this.findCallback.bind(this),
    4
  );
  this.findButton = document.getElementById("bst-demo-search-btn");
  this.findButton.onclick = this.findCallback.bind(this);
  this.goRightButton = document.getElementById("bst-demo-right-btn");
  this.goLeftButton = document.getElementById("bst-demo-left-btn");
  this.goRightButton.onclick = this.goDirR.bind(this);
  this.goLeftButton.onclick = this.goDirL.bind(this);
  this.nextProblemButton = document.getElementById("bst-demo-next-btn");
  this.nextProblemButton.onclick = () => {
    this.nextProblem();
    // Reset UI for new problem
    this.goLeftButton.disabled = true;
    this.goRightButton.disabled = true;
    this.verifyButton.disabled = true;
    document.getElementById("bst-demo-start-btn").style.display =
      "inline-block";
    this.nextProblemButton.style.display = "none";
  };
  this.verifyButton = document.getElementById("bst-demo-verify-btn");
  this.verifyButton.onclick = this.verifyAnswer.bind(this);
  // Start button logic
  this.startButton = document.getElementById("bst-demo-start-btn");
  this.startButton.onclick = () => {
    this.goLeftButton.disabled = false;
    this.goRightButton.disabled = false;
    this.verifyButton.disabled = false;
    // Highlight root node visually (immediately)
    if (
      this.treeRoot &&
      this.treeRoot.graphicID &&
      typeof this.cmd === "function"
    ) {
      this.cmd("SetHighlight", this.treeRoot.graphicID, 1);
    }
    // Show 'Choose the direction' message and clear any label
    displayComment("Choose the direction");
    this.cmd("SetText", 0, "");
    this.startButton.style.display = "none";
    this.nextProblemButton.style.display = "inline-block";
  };
};

// Optional: Expose a function to highlight the root node visually
window.bstHighlightRoot = function () {
  // Visually highlight the root node (remove highlight from all others first)
  if (
    window.Algorithm &&
    Algorithm.prototype &&
    Algorithm.prototype.animationManager
  ) {
    // Defensive: try to clear all highlights (if such a method exists)
    // Not all animation frameworks have this, so we focus on root
  }
  if (window.BST && window.BST.prototype && window.BST.prototype.treeRoot) {
    let root = window.BST.prototype.treeRoot;
    if (root && root.graphicID) {
      if (
        typeof window.currentBSTInstance !== "undefined" &&
        window.currentBSTInstance.treeRoot
      ) {
        root = window.currentBSTInstance.treeRoot;
      }
      if (
        root &&
        root.graphicID &&
        typeof window.currentBSTInstance.cmd === "function"
      ) {
        window.currentBSTInstance.cmd("SetHighlight", root.graphicID, 1);
      }
    }
  }
};

BST.prototype.verifyAnswer = function () {
  if (demoTrack.nodeTrack.data == this.findField.value) {
    $("#bst-demo-search-btn").click();
  } else {
    displayComment("Not done yet, Try again.");
  }
};
BST.prototype.nextProblem = function () {
  demoTrack.nodeTrack = this.treeRoot;
  this.findField.value =
    demoTrack.problems[demoTrack.problemTrack++ % demoTrack.problems.length];
  displayComment("Find " + this.findField.value);
  this.nextProblemButton.disabled = true;
};
BST.prototype.goDirR = function () {
  displayComment("Find " + this.findField.value);
  demoTrack.rightOrLeft = "R";
  $("#bst-demo-search-btn").click();
};
BST.prototype.goDirL = function () {
  displayComment("Find " + this.findField.value);
  demoTrack.rightOrLeft = "L";
  $("#bst-demo-search-btn").click();
};
BST.prototype.reset = function () {
  this.nextIndex = 1;
  this.treeRoot = null;
};

BST.prototype.insertCallback = function (event) {
  var insertedValue = this.insertField.value;
  // Get text value
  insertedValue = this.normalizeNumber(insertedValue, 2);
  if (insertedValue != "") {
    // set text value
    this.insertField.value = "";
    this.implementAction(this.insertElement.bind(this), insertedValue);
  }
};

BST.prototype.insertAuto = function (insertedValue) {
  // Get text value
  insertedValue = this.normalizeNumber(insertedValue, 2);
  if (insertedValue != "") {
    this.implementAction(this.insertElement.bind(this), insertedValue);
  }

  this.animationManager.skipForward();
};

BST.prototype.initializeDefaultTree = function () {
  let data = [
    16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11,
    13, 15, 17, 19, 21, 23, 25, 27, 29, 31,
  ];

  this.insertAuto(BST.DATA[0]);
  this.insertAuto(BST.DATA[1]);
  this.insertAuto(BST.DATA[2]);
  this.insertAuto(BST.DATA[3]);
  this.insertAuto(BST.DATA[4]);
  this.insertAuto(BST.DATA[5]);
  this.insertAuto(BST.DATA[6]);
  this.insertAuto(BST.DATA[7]);
  this.insertAuto(BST.DATA[8]);
  this.insertAuto(BST.DATA[9]);
  this.insertAuto(BST.DATA[10]);
  this.insertAuto(BST.DATA[11]);
  this.insertAuto(BST.DATA[12]);
  this.insertAuto(BST.DATA[13]);
  this.insertAuto(BST.DATA[14]);
  this.insertAuto(BST.DATA[15]);
  this.insertAuto(BST.DATA[16]);
  this.insertAuto(BST.DATA[17]);
  this.insertAuto(BST.DATA[18]);
  this.insertAuto(BST.DATA[19]);
  this.insertAuto(BST.DATA[20]);
  this.insertAuto(BST.DATA[21]);
  this.insertAuto(BST.DATA[22]);
  this.insertAuto(BST.DATA[23]);
  this.insertAuto(BST.DATA[24]);
  this.insertAuto(BST.DATA[25]);
  this.insertAuto(BST.DATA[26]);
  this.insertAuto(BST.DATA[27]);
  this.insertAuto(BST.DATA[28]);
  this.insertAuto(BST.DATA[29]);
  this.insertAuto(BST.DATA[30]);

  demoTrack.nodeTrack = this.treeRoot;

  this.nextProblemButton.disabled = true;
};

BST.prototype.findCallback = function (event) {
  var findValue;
  findValue = this.findField.value;
  findValue = this.normalizeNumber(this.findField.value, 2);
  //this.findField.value = "";
  this.implementAction(this.findElement.bind(this), findValue);
};

BST.prototype.findElement = function (findValue) {
  this.commands = [];

  this.highlightID = this.nextIndex++;

  this.doFind(demoTrack.nodeTrack, findValue);

  return this.commands;
};

BST.prototype.doFind = function (tree, value) {
  this.cmd("SetText", 0, ""); // Clear the label
  if (tree != null) {
    this.cmd("SetHighlight", tree.graphicID, 1);
    if (tree.data == value) {
      this.cmd("Step");
      this.cmd("SetText", 0, "Found:" + value);
      this.cmd("SetHighlight", tree.graphicID, 0);
      displayComment(
        "Congrats, you have found the element. Click on Next for next number to find."
      );
      this.nextProblemButton.disabled = false;
    } else {
      if (tree.data > value) {
        if (demoTrack.rightOrLeft == "R") {
          // Show message and do not proceed
          displayComment("Incorrect choice. Try again from current node.");
          this.cmd(
            "SetText",
            0,
            "Incorrect choice. Try again from current node."
          );
          return;
        }
        this.cmd("SetText", 0, "");
        this.cmd("Step");
        this.cmd("SetHighlight", tree.graphicID, 0);
        if (tree.left != null) {
          this.cmd(
            "CreateHighlightCircle",
            this.highlightID,
            BST.HIGHLIGHT_CIRCLE_COLOR,
            tree.x,
            tree.y
          );
          this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
          this.cmd("Step");
          this.cmd("Delete", this.highlightID);
        }
        demoTrack.nodeTrack = tree.left;
        this.cmd("SetHighlight", tree.left.graphicID, 1);
      } else {
        if (demoTrack.rightOrLeft == "L") {
          // Show message and do not proceed
          displayComment("Incorrect choice. Try again from current node.");
          this.cmd(
            "SetText",
            0,
            "Incorrect choice. Try again from current node."
          );
          return;
        }
        this.cmd("SetText", 0, "");
        this.cmd("Step");
        this.cmd("SetHighlight", tree.graphicID, 0);
        if (tree.right != null) {
          this.cmd(
            "CreateHighlightCircle",
            this.highlightID,
            BST.HIGHLIGHT_CIRCLE_COLOR,
            tree.x,
            tree.y
          );
          this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
          this.cmd("Step");
          this.cmd("Delete", this.highlightID);
        }
        demoTrack.nodeTrack = tree.right;
        this.cmd("SetHighlight", tree.right.graphicID, 1);
      }
    }
  } else {
    this.cmd("SetText", 0, "(Element not found)");
    this.cmd("Step");
    this.cmd("SetText", 0, "(Element not found)");
  }
};

BST.prototype.insertElement = function (insertedValue) {
  this.commands = new Array();
  this.cmd("SetText", 0, "Inserting " + insertedValue);
  this.highlightID = this.nextIndex++;

  if (this.treeRoot == null) {
    this.cmd(
      "CreateCircle",
      this.nextIndex,
      insertedValue,
      this.startingX,
      BST.STARTING_Y
    );
    this.cmd("SetForegroundColor", this.nextIndex, BST.FOREGROUND_COLOR);
    this.cmd("SetBackgroundColor", this.nextIndex, BST.BACKGROUND_COLOR);
    this.cmd("Step");
    this.treeRoot = new BSTNode(
      insertedValue,
      this.nextIndex,
      this.startingX,
      BST.STARTING_Y
    );
    this.nextIndex += 1;
  } else {
    this.cmd("CreateCircle", this.nextIndex, insertedValue, 100, 100);
    this.cmd("SetForegroundColor", this.nextIndex, BST.FOREGROUND_COLOR);
    this.cmd("SetBackgroundColor", this.nextIndex, BST.BACKGROUND_COLOR);
    this.cmd("Step");
    var insertElem = new BSTNode(insertedValue, this.nextIndex, 100, 100);

    this.nextIndex += 1;
    this.cmd("SetHighlight", insertElem.graphicID, 1);
    this.insert(insertElem, this.treeRoot);
    this.resizeTree();
  }
  this.cmd("SetText", 0, "");
  return this.commands;
};

BST.prototype.insert = function (elem, tree) {
  this.cmd("SetHighlight", tree.graphicID, 1);
  this.cmd("SetHighlight", elem.graphicID, 1);

  if (elem.data < tree.data) {
    this.cmd(
      "SetText",
      0,
      elem.data + " < " + tree.data + ".  Looking at left subtree"
    );
  } else {
    this.cmd(
      "SetText",
      0,
      elem.data + " >= " + tree.data + ".  Looking at right subtree"
    );
  }
  this.cmd("Step");
  this.cmd("SetHighlight", tree.graphicID, 0);
  this.cmd("SetHighlight", elem.graphicID, 0);

  if (elem.data < tree.data) {
    if (tree.left == null) {
      this.cmd("SetText", 0, "Found null tree, inserting element");

      this.cmd("SetHighlight", elem.graphicID, 0);
      tree.left = elem;
      elem.parent = tree;
      this.cmd("Connect", tree.graphicID, elem.graphicID, BST.LINK_COLOR);
    } else {
      this.cmd(
        "CreateHighlightCircle",
        this.highlightID,
        BST.HIGHLIGHT_CIRCLE_COLOR,
        tree.x,
        tree.y
      );
      this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
      this.cmd("Step");
      this.cmd("Delete", this.highlightID);
      this.insert(elem, tree.left);
    }
  } else if (elem.data > tree.data) {
    if (tree.right == null) {
      this.cmd("SetText", 0, "Found null tree, inserting element");
      this.cmd("SetHighlight", elem.graphicID, 0);
      tree.right = elem;
      elem.parent = tree;
      this.cmd("Connect", tree.graphicID, elem.graphicID, BST.LINK_COLOR);
      elem.x = tree.x + BST.WIDTH_DELTA / 2;
      elem.y = tree.y + BST.HEIGHT_DELTA;
      this.cmd("Move", elem.graphicID, elem.x, elem.y);
    } else {
      this.cmd(
        "CreateHighlightCircle",
        this.highlightID,
        BST.HIGHLIGHT_CIRCLE_COLOR,
        tree.x,
        tree.y
      );
      this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
      this.cmd("Step");
      this.cmd("Delete", this.highlightID);
      this.insert(elem, tree.right);
    }
  } else {
    this.cmd("Delete", elem.graphicID); // Remove the circle representing the duplicate element
    this.cmd("Step"); // Optional step to pause for visualization
  }
};

BST.prototype.resizeTree = function () {
  var startingPoint = this.startingX;
  this.resizeWidths(this.treeRoot);
  if (this.treeRoot != null) {
    if (this.treeRoot.leftWidth > startingPoint) {
      startingPoint = this.treeRoot.leftWidth;
    } else if (this.treeRoot.rightWidth > startingPoint) {
      startingPoint = Math.max(
        this.treeRoot.leftWidth,
        2 * startingPoint - this.treeRoot.rightWidth
      );
    }
    this.setNewPositions(this.treeRoot, startingPoint, BST.STARTING_Y, 0);
    this.animateNewPositions(this.treeRoot);
    this.cmd("Step");
  }
};

BST.prototype.setNewPositions = function (tree, xPosition, yPosition, side) {
  if (tree != null) {
    tree.y = yPosition;
    if (side == -1) {
      xPosition = xPosition - tree.rightWidth;
    } else if (side == 1) {
      xPosition = xPosition + tree.leftWidth;
    }
    tree.x = xPosition;
    this.setNewPositions(
      tree.left,
      xPosition,
      yPosition + BST.HEIGHT_DELTA,
      -1
    );
    this.setNewPositions(
      tree.right,
      xPosition,
      yPosition + BST.HEIGHT_DELTA,
      1
    );
  }
};
BST.prototype.animateNewPositions = function (tree) {
  if (tree != null) {
    this.cmd("Move", tree.graphicID, tree.x, tree.y);
    this.animateNewPositions(tree.left);
    this.animateNewPositions(tree.right);
  }
};

BST.prototype.resizeWidths = function (tree) {
  if (tree == null) {
    return 0;
  }
  tree.leftWidth = Math.max(this.resizeWidths(tree.left), BST.WIDTH_DELTA / 2);
  tree.rightWidth = Math.max(
    this.resizeWidths(tree.right),
    BST.WIDTH_DELTA / 2
  );
  return tree.leftWidth + tree.rightWidth;
};

function BSTNode(val, id, initialX, initialY) {
  this.data = val;
  this.x = initialX;
  this.y = initialY;
  this.graphicID = id;
  this.left = null;
  this.right = null;
  this.parent = null;
}
BST.prototype.disableUI = function (event) {
  this.insertField.disabled = true;
  this.insertButton.disabled = true;
  this.findField.disabled = true;
  this.findButton.disabled = true;
};

BST.prototype.enableUI = function (event) {
  this.insertField.disabled = false;
  this.insertButton.disabled = false;
  this.findField.disabled = false;
  this.findButton.disabled = false;
};

var currentAlg;

function init() {
  var animManag = initCanvas();
  currentAlg = new BST(animManag, canvas.width, canvas.height);
  currentAlg.initializeDefaultTree();
  displayComment("Find 21.");
}
