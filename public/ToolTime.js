class actCNC {

   constructor() {
      this.time;
   }
   getSeconds(tool) {
      tool = String(tool).split(".");
      if (tool[0]) {
         tool[0] = parseInt(tool[0]) * 60;
         return tool[0] + parseInt(tool[1]);
      } else {
         return parseInt(tool[1]);
      }
   }

   getMinutes(seconds) {
      if (seconds > 60) {
         return (String(Math.floor(seconds / 60)) + "." + String(seconds % 60));
      } else {
         return seconds;
      }
   }

   getTimeShift(tools = []) {
      if (tools.length) {
         for (let i = 1; i < tools.length; i++) {
            tools[i] = this.getMinutes(this.getSeconds(tools[i - 1]) + this.getSeconds(tools[i]));
         }
      }
      return tools;
   }

   getToolsTime(tools = []) {
      if (tools.length) {
         let toolsTime = [tools[0]];
         for (let i = 0; i <= tools.length; i++) {
            if (tools[i + 1]) {
               toolsTime[i + 1] = this.getMinutes(this.getSeconds(tools[i + 1]) - this.getSeconds(tools[i]));
            }
         }
         return toolsTime;
      }
   }

   getToolTime(toolOperations = []) {
      let tool = 0;
      for (let i = 0; i < toolOperations.length; i++) {
         tool += this.getSeconds(toolOperations[i]);
      }
      return this.getMinutes(tool);
   }

   getDumbToolsTime() {
      if (this.time.length) {
         let toolsTime = [this.time[0]];
         for (let i = 0; i < this.time.length; i++) {
            if (this.time[i + 1]) {
               toolsTime[i + 1] = (this.time[i + 1] - this.time[i]).toFixed(2);
            }
         }
         return toolsTime;
      }
   }
   // getMachineTime(tool = []) {
   //    let machineTime = 0;
   //    let arrLength = 0;
   //    if (tool.length) {
   //       arrLength = tool.length;
   //    } else {
   //       arrLength = this.tools.length;
   //    }
   //    for (let i = 0; i < arrLength; i++) {
   //       machineTime += this.getSeconds(tool[i] || this.tools[i]);
   //    }
   //    return machineTime = this.getMinutes(machineTime);
   // }

   // getToolsTime() {
   //    if (this.tools.length || this.tools) {
   //       let toolsTime = [];

   //       for (let i = 0; i < this.tools.length; i++) {
   //          if (this.tools[i + 1] && this.tools[i + 1] > this.tools[i]) {
   //             toolsTime[i] = this.getMinutes(this.getSeconds(this.tools[i + 1]) - this.getSeconds(this.tools[i]));
   //          }
   //       }
   //       return toolsTime;
   //    } else {
   //       console.log("please set tools");
   //       return;
   //    }
   // }
   // calculated time from array be like: 44.42, 1,6 || 1.6, 15.33, 23.5, 27.11
   // getDumbToolsTime() {
   //    if (this.tools.length || this.tools) {
   //       let dumbTools = [];
   //       for (let i = 0; i < this.tools.length; i++) {
   //          if (this.tools[i + 1] && this.tools[i + 1] > this.tools[i]) {
   //             dumbTools[i] = (this.tools[i + 1] - this.tools[i]).toFixed(2);
   //          } else if (this.tools[i + 1]) {
   //             dumbTools[i] = (this.getMachineTime() - this.tools[i + 1]).toFixed(2);
   //          } else {
   //             dumbTools[i] = this.tools[i];
   //          }
   //       }
   //       return dumbTools;
   //    } else {
   //       console.log("please set tools");
   //       return; // return massage 
   //    }
   // }
   setTools(tools = []) {
      this.time = this.getTimeShift(tools);
   }
}

//getTools array from object Turner
//setFunction to add tool in tools before existed tools or after. Then
// getMachineTime for all tools
//var tools = [toolOperations, "1.6"];
//var toolOperations = ["0.7", "43.19", "1.16"];
// var tools = ["43.21", "1.16", "12.5", "1.6"];
// var time = ["43.21", "44.37", "56.42", "57.48"];
var act = new actCNC();
var toolOperations = ["1.22", "7.50"];

var tools = [act.getToolTime(toolOperations), "1.23", "0.68", "3.17", "1.55"];
//act.setTools(tools = [act.getMachineTime(toolOperations), "1.6"]);
console.log(tools);
// act.setTools(time);
act.setTools(tools);
console.log(act.time);
console.log(act.getToolsTime(act.time));
console.log(act.getDumbToolsTime());

let one = 0;