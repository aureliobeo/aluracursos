class NegociacoesViews {

    private _elemento: Element;

    constructor(seletor: string){

        this._elemento = document.querySelector(seletor);
    }

    update(model: Negociacoes): void{
        this._elemento.innerHTML = this.template(model);
    }
    
    template(model: Negociacoes): string {
        return `
        <table class="table table-houver table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tdoby>
            ${model.paraArray().map(negociacao => {
                return `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getUTCFullYear()}}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `
            }).join()}
            </tdoby>

            <tfoot>
            </tfoot>

        </table>
        `;
    }
}