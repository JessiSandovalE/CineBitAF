// Models
let Detail = require('../models/detailModel');
let Cast = require('../models/castModel');
let Season = require('../models/seasonModel');
let Episodes = require('../models/episodeModel');

let dataController = {};

dataController.detailData = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let detail = await getDetail(id);
      let cast = await getCast(detail._id);

      if (detail.type == 'tv') {
        let season = await getSeason(detail._id);
        let episodes = await getEpisodes(season[0]._id);
        resolve({
          detail,
          cast,
          season,
          episodes
        });
      } else {
        resolve({
          detail,
          cast
        });
      }

    } catch (error) {
      console.log(error);
      reject('Error ' + error);
    }
  })
}

let getDetail = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = Detail.findById(id);
      resolve(data);
    } catch (error) {
      console.log(error);
      reject('Error ' + error);
    }
  });
}

let getCast = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await Cast.find({
        detailId: id
      });

      let castArray = [];
      for (c of data) {
        castArray.push(c);
      }

      resolve(castArray);
    } catch (error) {
      console.log(error);
      reject('Error ' + error);
    }
  });
}

let getSeason = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await Season.find({
        detailId: id
      });

      resolve(data);
    } catch (error) {
      console.log(error);
      reject('Error ' + error);
    }
  });
}

let getEpisodes = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await Episodes.find({
        seasonId: id
      });

      let episodesArray = [];
      for (c of data) {
        episodesArray.push(c);
      }

      resolve(episodesArray);
    } catch (error) {
      console.log(error);
      reject('Error ' + error);
    }
  });
}

module.exports = dataController;