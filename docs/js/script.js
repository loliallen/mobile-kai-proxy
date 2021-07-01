import { Variants } from "./Variant.js"

const std_variants = {
    AUTH: {
        pipeline: 270701192,
        step: 10,
        required: {
            Login: true,
            Password: true
        }
    },
    SCHELUDE_GET: {
        pipeline: 145877938,
        step: 3,
        required: {
            StudId: true
        }
    },
    BRS_GET_DISCIPLINES: {
        pipeline: 145864124,
        step: 7,
        required: {
            StudId: true,
            Semestr: true
        }
    },
    BRS_GET_SEMESTERS: {
        pipeline: 145864128,
        step: 3,
        required: {
            StudId: true
        }
    },
    BRS_GET_OLD: {
        pipeline: 145864130,
        step: 11,
        required: {
            StudId: true,
            Semestr: true
        }
    },
    BRS_GET: {
        pipeline: 445063016,
        step: 11,
        required: {
            StudId: true,
            Semestr: true
        }
    },
    GROUP_GET: {
        pipeline: 145873539,
        step: 6,
        required: {
            StudId: true
        }
    }
}
const abt_variants = {
    CONTEST_LIST: {
        pipeline: 584967122,
        step: 1,
        required: {}
    },
    VI_LIST__BAK_SPEC: {
        pipeline: 584967123,
        step: 1,
        required: {
            "programSetId": true
        }
    },
    RANGE_CONTEST_LISK__BAC_SPEC: {
        pipeline: 584967124,
        step: 1,
        required: {
            "competitionId": 1681962804694762774,
            "predm1": "Математика",
            "predm2": "Физика/Информатика и ИКТ",
            "predm3": "Русский язык"
        }
    },
    RANGE_CONTEST_LISK__SPO: {
        pipeline: 584967124,
        step: 2,
        required: {
            "competitionId": 1681962804694762774
        }
    },
    RANGE_CONTEST_LISK__MAG: {
        pipeline: 584967124,
        step: 3,
        required: {
            "competitionId": 1681962804694762774
        }
    }
}

window.onload = () => {

    const std_variants_node = document.getElementById('std-variants');
    const abt_variants_node = document.getElementById('abt-variants');

    const std_variants_btn = document.getElementById('nav-std');
    const abt_variants_btn = document.getElementById('nav-abt');

    const std_vars = new Variants(std_variants)
    const abt_vars = new Variants(abt_variants)

    const createChildren = (node, vars) =>
        vars.render().forEach(n => {
            node.appendChild(n)
        })

    const removeChildren = (nodeA, nodeB) => {
        nodeA.style.display = "none"
        nodeB.style.display = "inline"
    }


    createChildren(abt_variants_node, abt_vars)
    createChildren(std_variants_node, std_vars)

    abt_variants_btn.addEventListener("click", () => {
        removeChildren(std_variants_node, abt_variants_node)
    })

    std_variants_btn.addEventListener("click", () => {
        removeChildren(abt_variants_node, std_variants_node)
    })

}