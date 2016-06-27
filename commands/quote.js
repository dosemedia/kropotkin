var quotes = ['A soon as we study animals — not in laboratories and museums only, but in the forest and prairie, in the steppe and in the mountains — we at once perceive that though there is an immense amount of warfare and extermination going on amidst various species, and especially amidst various classes of animals, there is, at the same time, as much, or perhaps even more, of mutual support, mutual aid, and mutual defence amidst animals belonging to the same species or, at least, to the same society. Sociability is as much a law of nature as mutual struggle. Of course it would be extremely difficult to estimate, however roughly, the relative numerical importance of both these series of facts. But if we resort to an indirect test, and ask Nature: "Who are the fittest: those who are continually at war with each other, or those who support one another?" we at once see that those animals which acquire habits of mutual aid are undoubtedly the fittest. They have more chances to survive, and they attain, in their respective classes, the highest development and bodily organization. If the numberless facts which can be brought forward to support this view are taken into account, we may safely say that mutual aid is as much a law of animal life as mutual struggle; but that as a factor of evolution, it most probably has a far greater importance, inasmuch as it favors the development of such habits and characters as insure the maintenance and further development of the species, together with the greatest amount of welfare and enjoyment of life for the individual, with the least waste of energy. \n- Mutual Aid as a Factor in Evolution'];
var sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = (username, command) => {
    username = username || 'you';
    console.log("A quote for %s:", username);
    console.log(sample(quotes));
  };
