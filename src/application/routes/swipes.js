const express = require("express");
const router = express.Router();
const {
  createSwipe,
  getSwipes,
  getMatches,
} = require("../controllers/swipesController");
const {
  validateCreateSwipe,
} = require("../../infrastructure/middlewares/swipesValidations");
const authenticationToken = require("../../infrastructure/middlewares/auth");

/**
 * @swagger
 * tags:
 *   name: Swipes
 *   description: Operaciones relacionadas con swipes y matches
 */

/**
 * @swagger
 * /swipes:
 *   post:
 *     summary: Crear un nuevo swipe
 *     tags: [Swipes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - targetUserId
 *               - action
 *             properties:
 *               targetUserId:
 *                 type: string
 *                 example: "clhd9kabc123456abcde"
 *               action:
 *                 type: string
 *                 enum: [LIKE, DISLIKE]
 *                 example: "LIKE"
 *     responses:
 *       201:
 *         description: Swipe creado correctamente
 *       400:
 *         description: Error de validación o datos incorrectos
 *       500:
 *         description: Error del servidor
 */
router.post(
  "/swipes",
  authenticationToken,
  validateCreateSwipe,
  createSwipe
);

/**
 * @swagger
 * /swipes:
 *   get:
 *     summary: Obtener swipes realizados por el usuario autenticado
 *     tags: [Swipes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de swipes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error del servidor
 */
router.get("/swipes", authenticationToken, getSwipes);

/**
 * @swagger
 * /matches:
 *   get:
 *     summary: Obtener matches del usuario autenticado
 *     tags: [Swipes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de matches
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 matches:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Error del servidor
 */
router.get("/matches", authenticationToken, getMatches);

module.exports = router;
