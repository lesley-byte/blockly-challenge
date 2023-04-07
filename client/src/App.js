import React from "react";
import "./App.css";
import Blockly from "blockly";
import "blockly/javascript";
import myCustomBlock from "./customBlocks/customBlock";
import {
  andGate,
  ifThenElse,
  nandGate,
  norGate,
  notGate,
  orGate,
  xnorGate,
  xorGate,
} from "./customBlocks/logicBlocks";

import { checklistStepGenerator } from "./customBlocks/checklistStepGenerator";

function App() {
  const workspace = React.useRef(null);

  const importChecklistStepBlock = async () => {
    const checklistStepBlockModule = await import(
      "./customBlocks/checklistStepBlock"
    );
    return checklistStepBlockModule.default;
  };

  const registerCustomBlocks = async () => {
    const checklistStepBlock = await importChecklistStepBlock();

    // Register custom blocks
    Blockly.Blocks["my_custom_block"] = myCustomBlock;
    Blockly.Blocks["and_gate"] = andGate;
    Blockly.Blocks["if_then_else"] = ifThenElse;
    Blockly.Blocks["nand_gate"] = nandGate;
    Blockly.Blocks["nor_gate"] = norGate;
    Blockly.Blocks["not_gate"] = notGate;
    Blockly.Blocks["or_gate"] = orGate;
    Blockly.Blocks["xnor_gate"] = xnorGate;
    Blockly.Blocks["xor_gate"] = xorGate;
    Blockly.Blocks["checklist_step_block"] = checklistStepBlock;

    // Register generator stubs
    Blockly.JavaScript["checklist_step_block"] = checklistStepGenerator;
  };

  React.useEffect(() => {
    registerCustomBlocks();

    // Inject Blockly workspace
    workspace.current = Blockly.inject("blocklyDiv", {
      toolbox: `
        <xml>
          <block type="my_custom_block"></block>
          <block type="and_gate"></block>
          <block type="if_then_else"></block>
          <block type="nand_gate"></block>
          <block type="nor_gate"></block>
          <block type="not_gate"></block>
          <block type="or_gate"></block>
          <block type="xnor_gate"></block>
          <block type="xor_gate"></block>
          <block type="checklist_step_block"></block>
        </xml>
      `,
    });
  }, []);

  const generateCode = () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace.current);
    console.log(code);
  };

  return (
    <div className="App">
      <div id="blocklyDiv" style={{ height: 480, width: 600 }}></div>
      <button onClick={generateCode}>Generate Code</button>
    </div>
  );
}

export default App;
