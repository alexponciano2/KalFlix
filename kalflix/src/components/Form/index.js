import styles from "./Form.module.css"

function Form() {
    return (
        <section className={styles.container}>
            <h2>Cadastr de vídeos</h2>
            <form>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                    />
                </div>
                <div>
                    <label>Categorias</label>
                    <select>
                        <option value="-">Selecione uma categoria</option>

                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    )
}

export default Form;