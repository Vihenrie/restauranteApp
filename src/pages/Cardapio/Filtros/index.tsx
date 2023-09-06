import styles from './Filtros.module.scss';
import filtros from './filtros.json'

interface IOpcao {
    id: number;
    label: String
}

export default function Filtros(opcao: IOpcao) {
    return (
        <div className={styles.filtro}>
            {filtros.map((opcao) => (
                <button className={styles.filtro__filtro} key={opcao.id}>
                    {opcao.label}
                </button>
            )


            )}
        </div>
    )
}