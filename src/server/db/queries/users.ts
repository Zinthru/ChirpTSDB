import { query } from '../';

const all = () => query('SELECT * FROM chirps');


export default {
    all,
}