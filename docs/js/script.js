import {Variants} from "./Variant.js"

window.onload = () => {
    const variants = {
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

    const variants_node = document.getElementById('variants');

    const vars = new Variants(variants)
    let res = vars.render()
    console.log(res)
    res.forEach(n => {
        variants_node.appendChild(n)
    })
}