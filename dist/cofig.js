
document.config = {
    app_name: 'ModelStudioApp',
    autoStart: true,
    displayUI: true,
    showFPS:true,
    scene: [
        {
            backgroundColor: { r: 219/255, g: 212/255, b: 189/255, a: 1 },
            preload: true,//load model when start application

            //load before model load complete
            preloadConfig: ["backgroundColor", "dissolveMaterialPlugin", "importBoidsLib"],//"postProcess",
            filePath: './assets/',//test_babylonjs_scene/

            //or you can enter "empty_scene" to start a scene without model
            fileName: 'Corridor_Level_All_02_AOTexture.glb',//'dog_bake02.babylon',//SpeedBall_NewAnim test.babylon 'Demo_Test.glb'



            //generate hdr environment
            hdr_environment: {
                level: 0.3,
                filePath: './assets/',
                fileName: 'environment_02.env',
            },


            //post process
            postProcess: {
                glowLayer:{
                    intensity: 0.8,
                    blurKernelSize : 30,
                }
                // ssao2:{
                //     samples: 20
                // },
            },



            //light generator
            lights: [
                {
                    name: 'ambient light',
                    type: 'hemispheric',//ambient
                    intensity: 1,
                    direction: { x: 0, y: 1, z: 0 },
                    pos: { x: 0, y: 0, z: 0 },
                    color: { r: 0.2, g: 0.2, b: 0.2 },//0-1 (0-255)
                },
            ],

            //camera controller
            pathNavigation: {
                isVisible: false,
                onlyApiControl: false,
                rotate_finger_num: 2,
                move_finger_num: 1,
                mobile_speed: 0.5,
                mobile_fov: 1.2,//in radians
                
                maxRotateAngleX:10,//degree, 大於180表示沒有限制
                maxRotateAngleY:2,//degree, 大於180表示沒有限制

            },

            //arimillary system config
            armillarySystem:{
                texturesList:[
                    "./assets/Pano_Texture_01.png",
                    "./assets/Pano_Texture_02.png",
                    "./assets/Pano_Texture_03.png",
                    "./assets/Pano_Texture_04.png",
                    "./assets/Pano_Texture_05.png",
                    "./assets/Pano_Texture_06.png",
                    "./assets/Pano_Texture_07.png",
                    "./assets/Pano_Texture_08.png",
                    "./assets/Pano_Texture_09.png",
                    "./assets/Pano_Texture_10.png",
                ],
                assignList:[
                    "Sun.001"
                ]
            },

            //3d ui interface
            uiManager: {
                uiList3d: [
                    //第一個UI...
                    {
                        //必填
                        target: "Paint_Squirrel.001",
                        //必填
                        name: "SquirrelPaint",
                        //必填
                        mode: {
                            type: "color",// "outline", "color", "custom"
                            colorOptions: {
                                hoverColor: { r: 0.8, g: 0.8, b: 0.8 },
                                downColor: { r: 0.8, g: 0.8, b: 0.8 },
                            }
                        },
                        collision: {
                            distance: 8
                        }
                    },

                    //第二個UI...
                    {
                        //必填
                        target: "Paint_Whale.001",
                        //必填
                        name: "WhalePaint",
                        //必填
                        mode: {
                            type: "color",// "outline", "color", "custom"
                            //顏色選項
                            colorOptions: {
                                hoverColor: { r: 0.8, g: 0.8, b: 0.8 },//enter 0-1
                                downColor: { r: 0.8, g: 0.8, b: 0.8 },
                            }
                        },
                        collision: {
                            distance: 8
                        }
                    },
                ],
                uiList2d: [
                    {
                        target: "Paint_Squirrel.001",
                        name: "Paint_Squirrel.001_2d",
                        imgUrl: "./assets/UI.png",
                        imgSeries: {
                            cellHeight: 512,
                            cellWidth: 512,
                            cellNum : 30,
                            animationDeltaTime:25
                        },
                        options: {
                            //default
                            width: "80px",
                            height: '80px',
                            borderColor: 'black',
                            color : 'black',
                            background: 'green',
                            thickness: 0,
                        },
                        collision: {
                            distance: 8,
                            isEnterToDisplay: true//進入才會顯示UI
                        }
                    },
                    {
                        //必填
                        target: "Paint_Whale.001",
                        name: "Paint_Whale.001_2d",
                        imgUrl: "./assets/UI.png",
                        imgSeries: {
                            cellHeight: 512,
                            cellWidth: 512,
                            cellNum : 30,
                            animationDeltaTime:25
                        },
                        options: {
                            //default
                            width: "80px",
                            height: '80px',
                            borderColor: 'black',
                            color : 'black',
                            background: 'green',
                            thickness: 0,
                        },
                        collision: {
                            distance: 8,
                            isEnterToDisplay: true//進入才會顯示UI
                        }
                    },

                ]
            },

            // timelineEditor: {},

            timelinePlayer:{
                url:"./assets/TimelineProject (37).json",
                isAutoPlay: false,
                scrollControll: true,
                speed : 0.3,
            },

            sceneOptimizer: {
                targetFrameRate: 20,
                isAutoOptimize: true
            }
        },
    ]
}