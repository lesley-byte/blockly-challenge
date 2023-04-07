// customBlock.js

import Blockly from "blockly";

// Create a new Blockly.Blocks object if it doesn't exist yet
if (!Blockly.Blocks) {
  Blockly.Blocks = {};
}

// Define your custom block
Blockly.Blocks["my_custom_block"] = {
  init: function () {
    this.appendDummyInput().appendField("My Custom Block");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

export default Blockly.Blocks["my_custom_block"];
