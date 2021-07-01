
export class Variants {
    constructor(variants){
        this.variants = variants;
    }

    get_template(name, params){
        return `
            <tr><td colspan="2">${name}</td></tr>
            <tr><td>pipline_id</td><td>${params.pipeline}</td></tr>
            <tr><td>step_id</td><td>${params.step}</td></tr>
            <tr><td>variables</td><td><pre>${JSON.stringify(params.required, null, 2)}</pre></td></tr>`
    }

    render(){
        return Object.keys(this.variants).map(k => {
            let table = document.createElement('table')
            table.className = "variant"
            table.innerHTML = this.get_template(k, this.variants[k]).trim()
            return table
        })
    }
}