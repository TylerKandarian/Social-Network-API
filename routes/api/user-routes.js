const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addToFriendList,
  removefromFriendList,
} = require("../../controllers/user-controller");

// set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// set up GET one, PUT, and DELETE at /api/users/<id>
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addToFriendList);

router.route("/:userId/friends/:friendId").delete(removefromFriendList);

module.exports = router;
