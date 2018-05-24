const Senators = require('./senators')

const { send } = require('micro')
const { router, get } = require('microrouter')

const democrats = () => {
  return Senators.filter(senator => senator.party === 'Democrat')
};
const republicans = () => {
  return Senators.filter(senator => senator.party === 'Republican')
};
const independents = () => {
  return Senators.filter(senator => senator.party === 'Independent')
};
const males = () => {
  return Senators.filter(senator => senator.person.gender === 'male')
};
const females = () => {
  return Senators.filter(senator => senator.person.gender === 'female')
};

const home = (req, res) => send(res, 200, 'Home page yoooooooooo');

const dems = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, democrats());
};
const repubs = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, republicans());
};
const indies = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, independents());
};
const men = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, males());
};
const women = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, females());
};


module.exports = router(
  get('/', home),
  get('/republicans', repubs),
  get('/democrats', dems),
  get('/independents', indies),
  get('/males', men),
  get('/females', women)
);