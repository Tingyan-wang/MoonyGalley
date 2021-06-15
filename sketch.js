// Final Project
// 1. Moving mouse to see change of colour and light

// 2. Clicking mouse to play sounds, various sounds could be altered by clicking mouse each time

// 3. Pressing <Delete> key to stop playing sounds, and the sounds could not be played any more even click mouse again 


// Defining uploaded 3D data collection in form of JSON
let JsonData = {
    "Mountain1": { // Defining models corresponding to models in file of Assets 
        "data": {
            "name": "Mountain1: ", // name of models
            "fill": "#8A786C", // colour of models
            "rotate": "100", // rotation of models
            "rotateX": 15, // rotate the shape around X axis and in quantities specified by angle parameters
            "rotateY": 2, // rotate around Y axis
            "rotateZ": 0, 
            "scale": 80, // Scaling
            "translate": {"x": 15, "y": 9, "z": 0} 
        },
        "loadModel": null // Models need to be uploaded
    },
    "Mountain2": {
        "data": {
            "name": "Mountain2: ",
            "fill": "#8A786C",
            "rotate": 100,
            "rotateX": 4,
            "rotateY": 2,
            "rotateZ": 0,
            "scale": 89,
            "translate": {"x": -12, "y": -8, "z": 0}
        }, "loadModel": null
    },
    "Stone1_2": {
        "data": {
            "name": "Stone1_2: ",
            "fill": "#778899",
            "rotate": 96,
            "rotateX": 26,
            "rotateY": "-2",
            "rotateZ": "-7",
            "scale": "10",
            "translate": {"x": 120, "y": -66, "z": 75}
        }, "loadModel": null
    },
    "Stone1_3": {
        "data": {
            "name": "Stone1_3: ",
            "fill": "#778899",
            "rotate": 101,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "10",
            "translate": {"x": 70, "y": -38, "z": 90}
        }, "loadModel": null
    },
    "Stone1_5": {
        "data": {
            "name": "Stone1_5: ",
            "fill": "#778899",
            "rotate": 105,
            "rotateX": 23,
            "rotateY": 75,
            "rotateZ": "0",
            "scale": "8",
            "translate": {"x": -61, "y": "-18", "z": -5}
        }, "loadModel": null
    },
    "Stone1_6": {
        "data": {
            "name": "Stone1_6: ",
            "fill": "#778899",
            "rotate": 100,
            "rotateX": 16,
            "rotateY": -35,
            "rotateZ": "0",
            "scale": "6",
            "translate": {"x": 46, "y": "-10", "z": "0"}
        }, "loadModel": null
    },
    "Stone1_12": {
        "data": {
            "name": "Stone1_12: ",
            "fill": "#778899",
            "rotate": 100,
            "rotateX": 15,
            "rotateY": 0,
            "rotateZ": -10,
            "scale": "10",
            "translate": {"x": 170, "y": -275, "z": -105}
        }, "loadModel": null
    },
    "Stone1_13": {
        "data": {
            "name": "Stone1_13: ",
            "fill": "#778899",
            "rotate": 100,
            "rotateX": 25,
            "rotateY": 0,
            "rotateZ": 0,
            "scale": "10",
            "translate": {"x": 95, "y": "0", "z": 100}
        }, "loadModel": null
    },
    "Stone2_0": {
        "data": {
            "name": "Stone2_0: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 200, "y": -130, "z": "240"}
        }, "loadModel": null
    },
    "Stone2_4": {
        "data": {
            "name": "Stone2_4: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 60, "y": 0, "z": 260}
        }, "loadModel": null
    },
    "Stone2_5": {
        "data": {
            "name": "Stone2_5: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": 5,
            "rotateZ": 0,
            "scale": "5",
            "translate": {"x": 60, "y": 0, "z": 190}
        }, "loadModel": null
    },
    "Stone2_6": {
        "data": {
            "name": "Stone2_6: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 110, "y": "0", "z": 90}
        }, "loadModel": null
    },
    "Stone2_8": {
        "data": {
            "name": "Stone2_8: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 130, "y": 80, "z": 190}
        }, "loadModel": null
    },
    "Stone2_10": {
        "data": {
            "name": "Stone2_10: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": 30,
            "rotateY": 0,
            "rotateZ": 0,
            "scale": "5",
            "translate": {"x": 240, "y": 0, "z": 145}
        }, "loadModel": null
    },
    "Stone2_12": {
        "data": {
            "name": "Stone2_12: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": -5, "y": "-110", "z": "-5"}
        }, "loadModel": null
    },
    "Stone2_13": {
        "data": {
            "name": "Stone2_13: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 175, "y": -425, "z": 205}
        }, "loadModel": null
    },
    "Stone2_14": {
        "data": {
            "name": "Stone2_14: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 80, "y": -380, "z": "5"}
        }, "loadModel": null
    },
    "Stone2_15": {
        "data": {
            "name": "Stone2_15: ",
            "fill": "#DB7093",
            "rotate": 100,
            "rotateX": "30",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "5",
            "translate": {"x": 200, "y": -430, "z": 80}
        }, "loadModel": null
    },
    "Stone3_4": {
        "data": {
            "name": "Stone3_4: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 170, "y": -10, "z": 165}
        }, "loadModel": null
    },
    "Stone3_7": {
        "data": {
            "name": "Stone3_7: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 300, "y": "0", "z": 60}
        }, "loadModel": null
    },
    "Stone3_8": {
        "data": {
            "name": "Stone3_8: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 450, "y": -100, "z": 150}
        }, "loadModel": null
    },
    "Stone3_9": {
        "data": {
            "name": "Stone3_9: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 350, "y": 20, "z": 120}
        }, "loadModel": null
    },
    "Stone3_10": {
        "data": {
            "name": "Stone3_10: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 240, "y": -105, "z": 50}
        }, "loadModel": null
    },
    "Stone3_13": {
        "data": {
            "name": "Stone3_13: ",
            "fill": "#B0C4DE",
            "rotate": 100,
            "rotateX": "40",
            "rotateY": "-10",
            "rotateZ": "-5",
            "scale": "5",
            "translate": {"x": 240, "y": -180, "z": "0"}
        }, "loadModel": null
    },
    "Tree1_0": {
        "data": {
            "name": "Tree1_0: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -65, "y": -30, "z": 30}
        }, "loadModel": null
    },
    "Tree1_1": {
        "data": {
            "name": "Tree1_1: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -60, "y": -15, "z": 10}
        }, "loadModel": null
    },
    "Tree1_2": {
        "data": {
            "name": "Tree1_2: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -30, "y": -35, "z": 45}
        }, "loadModel": null
    },
    "Tree1_3": {
        "data": {
            "name": "Tree1_3: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": 5, "y": -25, "z": 25}
        }, "loadModel": null
    },
    "Tree1_4": {
        "data": {
            "name": "Tree1_4: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -20, "y": -25, "z": 30}
        }, "loadModel": null
    },
    "Tree1_5": {
        "data": {
            "name": "Tree1_5: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -15, "y": -10, "z": "0"}
        }, "loadModel": null
    },
    "Tree1_6": {
        "data": {
            "name": "Tree1_6: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": 5,
            "rotateY": -15,
            "rotateZ": 0,
            "scale": 15,
            "translate": {"x": 60, "y": 15, "z": 30}
        }, "loadModel": null
    },
    "Tree1_7": {
        "data": {
            "name": "Tree1_7: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": 10,
            "rotateY": 24,
            "rotateZ": 0,
            "scale": 15,
            "translate": {"x": 30, "y": 27, "z": 85}
        }, "loadModel": null
    },
    "Tree1_8": {
        "data": {
            "name": "Tree1_8: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 15,
            "translate": {"x": 15, "y": 20, "z": 30}
        }, "loadModel": null
    },
    "Tree1_9": {
        "data": {
            "name": "Tree1_9: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": 1,
            "rotateY": -20,
            "rotateZ": -5,
            "scale": 15,
            "translate": {"x": 80, "y": 20, "z": 30}
        }, "loadModel": null
    },
    "Tree1_10": {
        "data": {
            "name": "Tree1_10: ",
            "fill": "#228B22",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "20",
            "translate": {"x": -35, "y": -15, "z": 11}
        }, "loadModel": null
    },

    "Tree2_0": {
        "data": {
            "name": "Tree2_0: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -75, "y": -45, "z": 50}
        }, "loadModel": null
    },
    "Tree2_1": {
        "data": {
            "name": "Tree2_1: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 15,
            "translate": {"x": -60, "y": -10, "z": 10}
        }, "loadModel": null
    },
    "Tree2_2": {
        "data": {
            "name": "Tree2_2: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": "15",
            "translate": {"x": -10, "y": -45, "z": 45}
        }, "loadModel": null
    },
    "Tree2_3": {
        "data": {
            "name": "Tree2_3: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": 15,
            "rotateY": 15,
            "rotateZ": 10,
            "scale": "15",
            "translate": {"x": 10, "y": 25, "z": 50}
        }, "loadModel": null
    },
    "Tree2_4": {
        "data": {
            "name": "Tree2_4: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": 0,
            "rotateZ": 0,
            "scale": 15,
            "translate": {"x": -21, "y": -50, "z": 50}
        }, "loadModel": null
    },
    "Tree2_5": {
        "data": {
            "name": "Tree2_5: ",
            "fill": "#66CC99",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -85, "y": -42, "z": 60}
        }, "loadModel": null
    },

    "Tree3_0": {
        "data": {
            "name": "Tree3_0: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -60, "y": -55, "z": 45}
        }, "loadModel": null
    },
    "Tree3_1": {
        "data": {
            "name": "Tree3_1: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -115, "y": -55, "z": 60}
        }, "loadModel": null
    },
    "Tree3_2": {
        "data": {
            "name": "Tree3_2: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -70, "y": -65, "z": 127}
        }, "loadModel": null
    },
    "Tree3_3": {
        "data": {
            "name": "Tree3_3: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -100, "y": -60, "z": 70}
        }, "loadModel": null
    },
    "Tree3_4": {
        "data": {
            "name": "Tree3_4: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -10, "y": -30, "z": 50}
        }, "loadModel": null
    },
    "Tree3_5": {
        "data": {
            "name": "Tree3_5: ",
            "fill": "#6A5ACD",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": 87, "y": -5, "z": 105}
        }, "loadModel": null
    },

    "Tree4_0": {
        "data": {
            "name": "Tree4_0: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": 10,
            "rotateZ": 0,
            "scale": 10,
            "translate": {"x": 100, "y": 0, "z": 115}
        }, "loadModel": null
    },
    "Tree4_1": {
        "data": {
            "name": "Tree4_1: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -105, "y": -70, "z": 80}
        }, "loadModel": null
    },
    "Tree4_2": {
        "data": {
            "name": "Tree4_2: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -45, "y": -80, "z": 85}
        }, "loadModel": null
    },
    "Tree4_3": {
        "data": {
            "name": "Tree4_3: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": 10,
            "rotateY": -10,
            "rotateZ": 0,
            "scale": 8,
            "translate": {"x": 160, "y": 25, "z": 75}
        }, "loadModel": null
    },
    "Tree4_4": {
        "data": {
            "name": "Tree4_4: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": 25, "y": -75, "z": 70}
        }, "loadModel": null
    },
    "Tree4_5": {
        "data": {
            "name": "Tree4_5: ",
            "fill": "#3CB371",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": 0, "y": -80, "z": 77}
        }, "loadModel": null
    },

    "Tree5_0": {
        "data": {
            "name": "Tree5_0: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": 0,
            "rotateY": 15,
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": 5, "y": 25, "z": 95}
        }, "loadModel": null
    },
    "Tree5_1": {
        "data": {
            "name": "Tree5_1: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": 10,
            "rotateY": -15,
            "rotateZ": 0,
            "scale": 10,
            "translate": {"x": 95, "y": 20, "z": 50}
        }, "loadModel": null
    },
    "Tree5_2": {
        "data": {
            "name": "Tree5_2: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -90, "y": -65, "z": 70}
        }, "loadModel": null
    },
    "Tree5_3": {
        "data": {
            "name": "Tree5_3: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": 0,
            "rotateY": 0,
            "rotateZ": 0,
            "scale": 10,
            "translate": {"x": -105, "y": -80, "z": 115}
        }, "loadModel": null
    },
    "Tree5_4": {
        "data": {
            "name": "Tree5_4: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": 1,
            "rotateY": -40,
            "rotateZ": 0,
            "scale": 10,
            "translate": {"x": 85, "y": -75, "z": 100}
        }, "loadModel": null
    },
    "Tree5_5": {
        "data": {
            "name": "Tree5_5: ",
            "fill": "#90EE90",
            "rotate": 100,
            "rotateX": "0",
            "rotateY": "0",
            "rotateZ": "0",
            "scale": 10,
            "translate": {"x": -20, "y": -35, "z": 55}
        }, "loadModel": null
    },

    "Trees1": {
        "data": {
            "name": "Trees1: ",
            "fill": "#467500",
            "rotate": 103,
            "rotateX": -3,
            "rotateY": 18,
            "rotateZ": 1,
            "scale": 142,
            "translate": {"x": 5, "y": 8, "z": -25}
        }, "loadModel": null
    },

    "Trees1_2": {
        "data": {
            "name": "Trees1_2: ",
            "fill": "#99CC99",
            "rotate": 103,
            "rotateX": -5,
            "rotateY": 17,
            "rotateZ": 1,
            "scale": 265,
            "translate": {"x": 2, "y": 9, "z": -25}
        }, "loadModel": null
    },

    "Trees2": {
        "data": {
            "name": "Trees2: ",
            "fill": "#99CC99",
            "rotate": 105,
            "rotateX": -3,
            "rotateY": 21,
            "rotateZ": 1,
            "scale": 155,
            "translate": {"x": 4, "y": 9, "z": -38}
        }, "loadModel": null
    },
    "Water": {
        "data": {
            "name": "Water: ",
            "fill": "#BBFFFF",
            "rotate": 100,
            "rotateX": 13,
            "rotateY": 18,
            "rotateZ": 4,
            "scale": 375,
            "translate": {"x": 1, "y": -9, "z": -8}
        }, "loadModel": null
    }
}
// Defining configuration parameters for playing sound
let MusicData = {
    count: 0, // Recording the sound currently played
    delKey: 0, // If press <Delete> key or not
    "FlowerSound": null, 
    "MountainSound": null, 
    "StoneSound": null, 
    "TreeSound": null, 
    "WaterSound": null 
};
// Defining background colour and gradient of material
let MaterialData = {
    ambientLight: { // Defining environmental light
        grayOrRed: 100, 
        green: -1, 
        blue: -1 
    },
    ambientMaterial: { // Defining colour value of models in environment
        grayOrRed: -1, 
        green: -1, 
        blue: -1 
    },
    pointLight: { // Defining environmental light according to mouse movement
        grayOrRed: 255, 
        green: 255, 
        blue: 255, 
        z: 0
    },
    specularMaterial: { // Defining model reflection value
        grayOrRed: -1, 
        green: -1, 
        blue: -1 
    }
};

let canvasSize; // Size of canvas

function isNull(obj) { // Judging whether the value is null
    return obj === undefined || obj === null || obj === '';
}
// Creating model parameters
function createModel(modelData) {
    return {
        name: modelData.name, 
        fill: modelData.fill, 
        rotate: isNull(modelData.rotate) ? 0 : modelData.rotate, 
        rotateX: isNull(modelData.rotateX) ? 0 : modelData.rotateX, 
        rotateY: isNull(modelData.rotateY) ? 0 : modelData.rotateY, 
        rotateZ: isNull(modelData.rotateZ) ? 0 : modelData.rotateZ, 
        scale: isNull(modelData.scale) ? 0 : modelData.scale, 
        translate: { // Spatial movement of the model
            x: isNull(modelData.translateX) ? 0 : modelData.translateX, // Movement relative to X axis 
            y: isNull(modelData.translateY) ? 0 : modelData.translateY, // Movement relative to Y axis
            z: isNull(modelData.translateZ) ? 0 : modelData.translateZ // Movement relative to Z axis
        }
    }
}

// Creating View Debugger
function createDOM(modelData) {
    createSpan(modelData.name);
    createSpan('rotate');
    createInput(modelData.rotate, 'number').size(100, 20).input(function () {
        modelData.rotate = Number(this.value());
        loop();
    });
    createSpan('rotateX');
    createInput(modelData.rotateX, 'number').size(100, 20).input(function () {
        modelData.rotateX = Number(this.value());
        loop();
    });
    createSpan('rotateY');
    createInput(modelData.rotateY, 'number').size(100, 20).input(function () {
        modelData.rotateY = Number(this.value());
        loop();
    });
    createSpan('rotateZ');
    createInput(modelData.rotateZ, 'number').size(100, 20).input(function () {
        modelData.rotateZ = Number(this.value());
        loop();
    });
    createSpan('scale');
    createInput(modelData.scale, 'number').size(100, 20).input(function () {
        modelData.scale = Number(this.value());
        loop();
    });
    createSpan('translate.x');
    createInput(modelData.translate.x, 'number').size(100, 20).input(function () {
        modelData.translate.x = Number(this.value());
        loop();
    });
    createSpan('translate.y');
    createInput(modelData.translate.y, 'number').size(100, 20).input(function () {
        modelData.translate.y = Number(this.value());
        loop();
    });
    createSpan('translate.z');
    createInput(modelData.translate.z, 'number').size(100, 20).input(function () {
        modelData.translate.z = Number(this.value());
        loop();
    });
    createElement('br');
}

// Drawing Action
function drawAction(drawModel, loadModel) {
    push(); // Start to draw individual models
    fill(drawModel.fill); 
    noStroke(); // No edges and lines
    rotate(PI * Number(drawModel.rotate) * 0.01); 
    rotateX(PI * Number(drawModel.rotateX * 0.01)); 
    rotateY(PI * Number(drawModel.rotateY * 0.01)); 
    rotateZ(PI * Number(drawModel.rotateZ * 0.01)); 
    scale(PI * Number(drawModel.scale * 0.01)); 
    translate(canvasSize * Number(drawModel.translate.x) * 0.01, canvasSize * Number(drawModel.translate.y) * 0.01, canvasSize * Number(drawModel.translate.z) * 0.01); // The model moves within the canvas
    if (MaterialData.ambientMaterial.grayOrRed >= 0 && MaterialData.ambientMaterial.grayOrRed <= 255) { // Show the hue and luster of the environment
        if (MaterialData.ambientMaterial.green >= 0 && MaterialData.ambientMaterial.green <= 255 && MaterialData.ambientMaterial.blue >= 0 && MaterialData.ambientMaterial.blue <= 255) {
            ambientMaterial(MaterialData.ambientMaterial.grayOrRed, MaterialData.ambientMaterial.green, MaterialData.ambientMaterial.blue);
        } else {
            ambientMaterial(MaterialData.ambientMaterial.grayOrRed);
        }
    }
    if (MaterialData.specularMaterial.grayOrRed >= 0 && MaterialData.specularMaterial.grayOrRed <= 255) { // Show the hue and luster of the environment
        if (MaterialData.specularMaterial.green >= 0 && MaterialData.specularMaterial.green <= 255 && MaterialData.specularMaterial.blue >= 0 && MaterialData.specularMaterial.blue <= 255) {
            specularMaterial(MaterialData.specularMaterial.grayOrRed, MaterialData.specularMaterial.green, MaterialData.specularMaterial.blue);
        } else {
            specularMaterial(MaterialData.specularMaterial.grayOrRed);
        }
    }
    model(loadModel); // Show models
    pop(); // End of drawing individual models
}

function preload() {
    canvasSize = 690; // createCanvas(840, 690); // Set size of canvas
    // Upload the sounds
    MusicData.FlowerSound = loadSound('assets/Flower.mp3');
    MusicData.MountainSound = loadSound('assets/Mountain.mp3');
    MusicData.StoneSound = loadSound('assets/Stone.mp3');
    MusicData.TreeSound = loadSound('assets/Tree.mp3');
    MusicData.WaterSound = loadSound('assets/Water.mp3');
    // Upload the models
    JsonData.Mountain1.loadModel = loadModel('assets/Mountain1.obj', true);
    JsonData.Mountain2.loadModel = loadModel('assets/Mountain2.obj', true);
    JsonData.Stone1_2.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone1_3.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone1_5.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone1_6.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone1_12.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone1_13.loadModel = loadModel('assets/Stone1.obj', true);
    JsonData.Stone2_0.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_4.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_5.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_6.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_8.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_10.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_12.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_13.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_14.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone2_15.loadModel = loadModel('assets/Stone2.obj', true);
    JsonData.Stone3_4.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Stone3_7.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Stone3_8.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Stone3_9.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Stone3_10.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Stone3_13.loadModel = loadModel('assets/Stone3.obj', true);
    JsonData.Tree1_0.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_1.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_2.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_3.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_4.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_5.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_6.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_7.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_8.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_9.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree1_10.loadModel = loadModel('assets/Tree1.obj', true);
    JsonData.Tree2_0.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree2_1.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree2_2.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree2_3.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree2_4.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree2_5.loadModel = loadModel('assets/Tree2.obj', true);
    JsonData.Tree3_0.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree3_1.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree3_2.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree3_3.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree3_4.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree3_5.loadModel = loadModel('assets/Tree3.obj', true);
    JsonData.Tree4_0.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree4_1.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree4_2.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree4_3.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree4_4.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree4_5.loadModel = loadModel('assets/Tree4.obj', true);
    JsonData.Tree5_0.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Tree5_1.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Tree5_2.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Tree5_3.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Tree5_4.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Tree5_5.loadModel = loadModel('assets/Tree5.obj', true);
    JsonData.Trees1.loadModel = loadModel('assets/Trees1.obj', true);
    JsonData.Trees1_2.loadModel = loadModel('assets/Trees1.obj', true);
    JsonData.Trees2.loadModel = loadModel('assets/Trees2.obj', true);
    JsonData.Water.loadModel = loadModel('assets/Water.obj', true);
}

// Startup application
function setup() {
    createCanvas(840, 690, WEBGL); // Create canvas

    // createDOM(JsonData.Stone1_2.data);
    // createDOM(JsonData.Stone1_3.data);
    // createDOM(JsonData.Stone1_5.data);
    // createDOM(JsonData.Stone1_6.data);
    // createDOM(JsonData.Stone1_12.data);
    // createDOM(JsonData.Stone1_13.data);

    // createDOM(JsonData.Stone2_0.data);
    // createDOM(JsonData.Stone2_4.data);
    // createDOM(JsonData.Stone2_5.data);
    // createDOM(JsonData.Stone2_6.data);
    // createDOM(JsonData.Stone2_8.data);
    // createDOM(JsonData.Stone2_10.data);
    // createDOM(JsonData.Stone2_12.data);
    // createDOM(JsonData.Stone2_13.data);
    // createDOM(JsonData.Stone2_14.data);
    // createDOM(JsonData.Stone2_15.data);

    // createDOM(JsonData.Stone3_4.data);
    // createDOM(JsonData.Stone3_7.data);
    // createDOM(JsonData.Stone3_8.data);
    // createDOM(JsonData.Stone3_9.data);
    // createDOM(JsonData.Stone3_10.data);
    // createDOM(JsonData.Stone3_13.data);

    // createDOM(JsonData.Tree1_0.data);
    // createDOM(JsonData.Tree1_1.data);
    // createDOM(JsonData.Tree1_2.data);
    // createDOM(JsonData.Tree1_3.data);
    // createDOM(JsonData.Tree1_4.data);
    // createDOM(JsonData.Tree1_5.data);
    // createDOM(JsonData.Tree1_6.data);
    // createDOM(JsonData.Tree1_7.data);
    // createDOM(JsonData.Tree1_8.data);
    // createDOM(JsonData.Tree1_9.data);
    // createDOM(JsonData.Tree1_10.data);

    // createDOM(JsonData.Tree3_0.data);

    // createDOM(JsonData.Tree4_0.data);
    // createDOM(JsonData.Tree4_1.data);
    // createDOM(JsonData.Tree4_2.data);
    // createDOM(JsonData.Tree4_3.data);
    // createDOM(JsonData.Tree4_4.data);
    // createDOM(JsonData.Tree4_5.data);

    // createDOM(JsonData.Trees1_2.data);

    noLoop(); // No cycle
}
// Drawing
function draw() {
    background('#ACD6FF'); 
    background(lerpColor(color('#C4E1FF'), color('#E1C4C4'), mouseX / width)); // Set the gradient colour of background
    directionalLight(250, 250, 250, 0, 0, 1000); // Set direct light source
    if (MaterialData.ambientLight.grayOrRed >= 0 && MaterialData.ambientLight.grayOrRed <= 255) {
        if (MaterialData.ambientLight.green >= 0 && MaterialData.ambientLight.green <= 255 && MaterialData.ambientLight.blue >= 0 && MaterialData.ambientLight.blue <= 255) {
            ambientLight(MaterialData.ambientLight.grayOrRed, MaterialData.ambientLight.green, MaterialData.ambientLight.blue);
        } else {
            ambientLight(MaterialData.ambientLight.grayOrRed);
        }
    }
    if (MaterialData.pointLight.grayOrRed >= 0 && MaterialData.pointLight.grayOrRed <= 255
        && MaterialData.pointLight.green >= 0 && MaterialData.pointLight.green <= 255
        && MaterialData.pointLight.blue >= 0 && MaterialData.pointLight.blue <= 255) { // Set moving light source
        pointLight(MaterialData.pointLight.grayOrRed, MaterialData.pointLight.green, MaterialData.pointLight.blue, mouseX - width / 2, mouseY - height / 2, MaterialData.pointLight.z);
    }
    // Upload the models
    drawAction(JsonData.Mountain1.data, JsonData.Mountain1.loadModel);
    drawAction(JsonData.Mountain2.data, JsonData.Mountain2.loadModel);
    drawAction(JsonData.Stone1_2.data, JsonData.Stone1_2.loadModel);
    drawAction(JsonData.Stone1_3.data, JsonData.Stone1_3.loadModel);
    drawAction(JsonData.Stone1_5.data, JsonData.Stone1_5.loadModel);
    drawAction(JsonData.Stone1_6.data, JsonData.Stone1_6.loadModel);
    drawAction(JsonData.Stone1_12.data, JsonData.Stone1_12.loadModel);
    drawAction(JsonData.Stone1_13.data, JsonData.Stone1_13.loadModel);
    drawAction(JsonData.Stone2_0.data, JsonData.Stone2_0.loadModel);
    drawAction(JsonData.Stone2_4.data, JsonData.Stone2_4.loadModel);
    drawAction(JsonData.Stone2_5.data, JsonData.Stone2_5.loadModel);
    drawAction(JsonData.Stone2_6.data, JsonData.Stone2_6.loadModel);
    drawAction(JsonData.Stone2_8.data, JsonData.Stone2_8.loadModel);
    drawAction(JsonData.Stone2_10.data, JsonData.Stone2_10.loadModel);
    drawAction(JsonData.Stone2_12.data, JsonData.Stone2_12.loadModel);
    drawAction(JsonData.Stone2_13.data, JsonData.Stone2_13.loadModel);
    drawAction(JsonData.Stone2_14.data, JsonData.Stone2_14.loadModel);
    drawAction(JsonData.Stone2_15.data, JsonData.Stone2_15.loadModel);
    drawAction(JsonData.Stone3_4.data, JsonData.Stone3_4.loadModel);
    drawAction(JsonData.Stone3_7.data, JsonData.Stone3_7.loadModel);
    drawAction(JsonData.Stone3_8.data, JsonData.Stone3_8.loadModel);
    drawAction(JsonData.Stone3_9.data, JsonData.Stone3_9.loadModel);
    drawAction(JsonData.Stone3_10.data, JsonData.Stone3_10.loadModel);
    drawAction(JsonData.Stone3_13.data, JsonData.Stone3_13.loadModel);
    drawAction(JsonData.Tree1_0.data, JsonData.Tree1_0.loadModel);
    drawAction(JsonData.Tree1_1.data, JsonData.Tree1_1.loadModel);
    drawAction(JsonData.Tree1_2.data, JsonData.Tree1_2.loadModel);
    drawAction(JsonData.Tree1_3.data, JsonData.Tree1_3.loadModel);
    drawAction(JsonData.Tree1_4.data, JsonData.Tree1_4.loadModel);
    drawAction(JsonData.Tree1_5.data, JsonData.Tree1_5.loadModel);
    drawAction(JsonData.Tree1_6.data, JsonData.Tree1_6.loadModel);
    drawAction(JsonData.Tree1_7.data, JsonData.Tree1_7.loadModel);
    drawAction(JsonData.Tree1_8.data, JsonData.Tree1_8.loadModel);
    drawAction(JsonData.Tree1_9.data, JsonData.Tree1_9.loadModel);
    drawAction(JsonData.Tree1_10.data, JsonData.Tree1_10.loadModel);
    drawAction(JsonData.Tree2_0.data, JsonData.Tree2_0.loadModel);
    drawAction(JsonData.Tree2_1.data, JsonData.Tree2_1.loadModel);
    drawAction(JsonData.Tree2_2.data, JsonData.Tree2_2.loadModel);
    drawAction(JsonData.Tree2_3.data, JsonData.Tree2_3.loadModel);
    drawAction(JsonData.Tree2_4.data, JsonData.Tree2_4.loadModel);
    drawAction(JsonData.Tree2_5.data, JsonData.Tree2_5.loadModel);
    drawAction(JsonData.Tree3_0.data, JsonData.Tree3_0.loadModel);
    drawAction(JsonData.Tree3_1.data, JsonData.Tree3_1.loadModel);
    drawAction(JsonData.Tree3_2.data, JsonData.Tree3_2.loadModel);
    drawAction(JsonData.Tree3_3.data, JsonData.Tree3_3.loadModel);
    drawAction(JsonData.Tree3_4.data, JsonData.Tree3_4.loadModel);
    drawAction(JsonData.Tree3_5.data, JsonData.Tree3_5.loadModel);
    drawAction(JsonData.Tree4_0.data, JsonData.Tree4_0.loadModel);
    drawAction(JsonData.Tree4_1.data, JsonData.Tree4_1.loadModel);
    drawAction(JsonData.Tree4_2.data, JsonData.Tree4_2.loadModel);
    drawAction(JsonData.Tree4_3.data, JsonData.Tree4_3.loadModel);
    drawAction(JsonData.Tree4_4.data, JsonData.Tree4_4.loadModel);
    drawAction(JsonData.Tree4_5.data, JsonData.Tree4_5.loadModel);
    drawAction(JsonData.Tree5_0.data, JsonData.Tree5_0.loadModel);
    drawAction(JsonData.Tree5_1.data, JsonData.Tree5_1.loadModel);
    drawAction(JsonData.Tree5_2.data, JsonData.Tree5_2.loadModel);
    drawAction(JsonData.Tree5_3.data, JsonData.Tree5_3.loadModel);
    drawAction(JsonData.Tree5_4.data, JsonData.Tree5_4.loadModel);
    drawAction(JsonData.Tree5_5.data, JsonData.Tree5_5.loadModel);
    drawAction(JsonData.Trees1.data, JsonData.Trees1.loadModel);
    drawAction(JsonData.Trees1_2.data, JsonData.Trees1_2.loadModel);
    drawAction(JsonData.Trees2.data, JsonData.Trees2.loadModel);
    // Set the gradient colour of water
    JsonData.Water.data.fill = lerpColor(color('#BBFFFF'), color('#F2E6E6'), mouseX / width);
    drawAction(JsonData.Water.data, JsonData.Water.loadModel);
}

function mouseMoved() { // Cyclic loading when moving mouse
    loop();
}

function mouseClicked() { // If click the mouse
    if (MusicData.delKey === 0) { // If press <Delete> key
        if (MusicData.count === 0) {
            MusicData.FlowerSound.pause();
            MusicData.MountainSound.pause();
            MusicData.StoneSound.pause();
            MusicData.TreeSound.loop();
            MusicData.WaterSound.pause();
        } else if (MusicData.count === 1) {
            MusicData.FlowerSound.pause();
            MusicData.MountainSound.loop();
            MusicData.StoneSound.pause();
            MusicData.TreeSound.pause();
            MusicData.WaterSound.pause();
        } else if (MusicData.count === 2) {
            MusicData.FlowerSound.pause();
            MusicData.MountainSound.pause();
            MusicData.StoneSound.loop();
            MusicData.TreeSound.pause();
            MusicData.WaterSound.pause();
        } else if (MusicData.count === 3) {
            MusicData.FlowerSound.pause();
            MusicData.MountainSound.pause();
            MusicData.StoneSound.pause();
            MusicData.TreeSound.pause();
            MusicData.WaterSound.loop();
        } else {
            MusicData.FlowerSound.loop();
            MusicData.MountainSound.pause();
            MusicData.StoneSound.pause();
            MusicData.TreeSound.pause();
            MusicData.WaterSound.pause();
            MusicData.count = -1;
        }
        MusicData.count++; // Count+1 when switching the sounds each time
    }
}

function keyPressed() { // Stop playing the sound when pressing <Delete> key
    if (keyCode === 8) { 
        MusicData.FlowerSound.pause();
        MusicData.MountainSound.pause();
        MusicData.StoneSound.pause();
        MusicData.TreeSound.pause();
        MusicData.WaterSound.pause();
        MusicData.delKey = 1;
    }
}

setTimeout(function () {
    document.getElementById('container').style.display = 'block';
}, 3000);

setTimeout(function () {
    document.getElementById('container').style.display = 'none';
}, 8000);
