class Hash {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    #hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.#hash(key);
        // this.table[index] = value;
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKey = bucket.find(item => item[0] === key);
            if (sameKey) {
                sameKey[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.#hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key);
            if (sameKey) {
                return sameKey[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.#hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key);
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1);
                if (bucket.length === 0) {
                    this.table[index] = undefined;
                }
                return sameKey;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const hash = new Hash(50);
hash.set("name", 'Jeffrey');
hash.set('mane', 'Daniel')
hash.set('age', 21);
hash.set('MOB', 'june');
hash.display();
console.log(hash.get('name'));
hash.remove('age');
hash.set("name", 'JD');
hash.display();