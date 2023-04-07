import * as Blockly from "blockly";

const checklistStepGenerator = (block) => {
  const stepText = block.getFieldValue("STEP_TEXT");
  const stepColor = block.getFieldValue("STEP_COLOR");

  const code = `{
    text: "${stepText}",
    color: "${stepColor}",
  }`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

export { checklistStepGenerator };
