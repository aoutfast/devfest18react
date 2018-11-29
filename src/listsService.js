export default class ListsService {
  static async getAll() {
    try {
      let response = await fetch('https://api.myjson.com/bins/bed0y');
      return response.json();
    } catch (err) {
      return err;
    }
  }
}
