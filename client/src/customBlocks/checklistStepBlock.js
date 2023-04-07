import * as Blockly from "blockly";

const checklistStepBlock = {
  init: function () {
    this.appendDummyInput()
      .appendField("Step:")
      .appendField(new Blockly.FieldTextInput("Step text"), "TEXT")
      .appendField("Color:")
      .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("Checklist step with text and color");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["checklist_step_block"] = checklistStepBlock;

export default checklistStepBlock;
