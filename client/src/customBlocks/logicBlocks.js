import Blockly from "blockly";

// AND gate
Blockly.Blocks["and_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck(["Boolean", "checklist_step_block"]);
    this.appendValueInput("B")
      .setCheck(["Boolean", "checklist_step_block"])
      .appendField("AND");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("AND gate");
    this.setHelpUrl("");
  },
};

// IF THEN ELSE
Blockly.Blocks["if_then_else"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("IF");
    this.appendValueInput("C").setCheck("Boolean").appendField("THEN");
    this.appendValueInput("D").setCheck("Boolean").appendField("ELSE");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("IF THEN ELSE");
    this.setHelpUrl("");
  },
};

// NAND gate
Blockly.Blocks["nand_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("NAND");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("NAND gate");
    this.setHelpUrl("");
  },
};

// NOR gate
Blockly.Blocks["nor_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("NOR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("NOR gate");
    this.setHelpUrl("");
  },
};

// NOT gate
Blockly.Blocks["not_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean").appendField("NOT");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("NOT gate");
    this.setHelpUrl("");
  },
};

// OR gate
Blockly.Blocks["or_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("OR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("OR gate");
    this.setHelpUrl("");
  },
};

// xnor gate
Blockly.Blocks["xnor_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("XNOR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("XNOR gate");
    this.setHelpUrl("");
  },
};

// XOR gate
Blockly.Blocks["xor_gate"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("XOR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("XOR gate");
    this.setHelpUrl("");
  },
};

// export all the blocks in this file
export const andGate = Blockly.Blocks["and_gate"];
export const ifThenElse = Blockly.Blocks["if_then_else"];
export const nandGate = Blockly.Blocks["nand_gate"];
export const norGate = Blockly.Blocks["nor_gate"];
export const notGate = Blockly.Blocks["not_gate"];
export const orGate = Blockly.Blocks["or_gate"];
export const xnorGate = Blockly.Blocks["xnor_gate"];
export const xorGate = Blockly.Blocks["xor_gate"];
