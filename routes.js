import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { playlistController } from "./controllers/playlist-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { trackController } from "./controllers/track-controller.js";

export const router = express.Router();

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addplaylist", dashboardController.addPlaylist);
router.get("/about", aboutController.index);
router.get("/playlist/:id", playlistController.index);
router.post("/playlist/:id/addtrack", playlistController.addTrack);
router.get("/dashboard/deleteplaylist/:id", dashboardController.deletePlaylist);
router.get("/playlist/:playlistid/deletetrack/:trackid", playlistController.deleteTrack);
router.get("/playlist/:playlistid/edittrack/:trackid", trackController.index);
router.post("/playlist/:playlistid/updatetrack/:trackid", trackController.update);

router.get("/", accountsController.index);

router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

