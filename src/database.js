export class Database {
    #database = {}
    // esse # faz com que database seja uma prop privada,
    // entao nao conseguimos acessar ele diretamente
    // isso é otimo quando se trata de db

    select(table) {
        const data = this.#database[table] ?? []

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.#database[table].push(data)
    } else {
        this.#database[table] = [data]
    }

    return data;
    }
}
