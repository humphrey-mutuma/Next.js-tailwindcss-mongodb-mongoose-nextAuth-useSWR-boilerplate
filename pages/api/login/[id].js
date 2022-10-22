import dbConnect from "../../../backend/config/dbConnect";
import User from "../../../backend/models/UserModel";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const {
    query: { id },
    method,
  } = req;
  // await database connetion
  await dbConnect();

  return new Promise((resolve) => {
    switch (method) {
      case "GET":
        // @route   GET /login/id
        // @desc    Get a user
        // @access  Private
        try {
          // require session/authenticated user to fetch a user
          if (!session) {
            res
              .status(400)
              .json({ success: false, message: "You are not logged in" });
            return resolve();
          }
          // get the user email as an id from query params
          const userEmail = id;
           // fetch one user whose email in the Database matches the email from the query
          // fetch a user by email
          User.findOne({ email: userEmail })
            .lean()
            .exec(function (err, users) {
              if (err) {
                res.status(400).json({ sucess: false });
                return resolve();
              }
              res.status(200).json({ success: true, data: users });
              return resolve();
            });
        } catch (error) {
          res
            .status(400)
            .json({ success: false, mesage: " something went wrong" });
          return resolve();
        }
        break;

      default:
        res.status(400).json({ success: false });
        return resolve();
        break;
    }
  });
}
