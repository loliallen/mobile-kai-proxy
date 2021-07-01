
//http://10.0.2.33:8080/default/Pipeline/GetStepResult?runParams={"PipelineId":270701192,"StepId":18,"OutputName":"Row","Variables":{"Login":"GalimovRaF","Password":"p3u57dbd"}}
//http://10.0.2.33:8080/default/Pipeline/GetStepResult?runParams={"PipelineId":145877938,"StepId":3,"OutputName":"Row","Variables":{"StudId":136469}}
const mock_data = [
    {
        name: "Login Test",
        data: {
            pipline_id: 270701192,
            step_id: 10,
            variables: {
                "Login":"GalimovRaF",
                "Password":"p3u57dbd"
            }
        }
    },
    {
        name: "Scheclude Test",
        data: {
            pipline_id: 145877938,
            step_id: 3,
            variables: {
                "StudId":136469
            }
        }
    }
]