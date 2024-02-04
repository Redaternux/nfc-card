
const itemsRoutes = require('./items.routes');
const cardsRoutes = require('./cards.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const commandesRoutes = require('./commandes.routes');
const servicesRoutes = require('./Services.routes');
const galerieRoutes = require('./galerie.routes')
const bs_hoursRoutes = require('./bs_hours.routes')
const user_cmdRoutes = require('./user_cmd.routes')




module.exports = function(app) {

    app.use("/api/items", itemsRoutes);
    app.use("/api/cards", cardsRoutes);
    app.use("/api/users", usersRoutes);
    app.use("/api/auth", authRoutes);
    app.use("/api/orders", commandesRoutes);
    app.use("/api/services", servicesRoutes);
    app.use("/api/galerie", galerieRoutes);
    app.use("/api/bs_hours", bs_hoursRoutes);
    app.use("/api/user_cmd", user_cmdRoutes);
  };
