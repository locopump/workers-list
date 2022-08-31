import {LitElement, html} from 'lit';
import styles from './WorkersList-styles.js';

export class WorkersList extends LitElement {
    static get is() {
        return 'workers-list';
    }
    static get properties() {
        return {
            employees: {
                type: Array,
                attribute: 'list-employees'
            }
        };
    }

    static get styles() {
        return [
            styles
        ];
    }

    constructor() {
        super();
        console.log(this.employees);
        this.employees = [];
    }

    async firstUpdated() {
        await this.updateComplete;
    }

    render() {
        return html`
            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Ape. Pat.</th>
                        <th>Ape. Mat.</th>
                        <th>DNI</th>
                        <th>Correo Neoris</th>
                        <th>Nivel Neoris</th>
                        <th>Fecha Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                ${this.employees.map(employee => html`
                    <tr>
                        <td>${employee.nombre}</td>
                        <td>${employee.apellido}</td>
                        <td>Ape.Pat</td>
                        <td>${employee.dni}</td>
                        <td>${employee.correoNeoris}</td>
                        <td>${employee.nivelNeoris}</td>
                        <td>2022-02-25</td>
                    </tr>
                `)}
                </tbody>
            </table>
        `;
    }
}
