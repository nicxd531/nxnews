import { dbConnect } from "../../../../../../../lib/db-connect";
import User from "../../../../../../../models/user";

import {
  errorhandler,
  responsehandler,
} from "../../../../../../../utils/common";

export async function PATCH(req, { params }) {
  // check id
  if (!params) {
    return Response.json(errorhandler("id not Found"));
  }
  try {
    // connect to database
    await dbConnect();
    // converting request and id
    const body = await req.json();
    const { id } = params;
    // distructure body
    const {
      avatarImage,
      name,
      userName,
      about,
      occupation,
      location,
      email,
      linkUrl,
      linkName,
      instaUsername,
      instaLink,
      twitterUsername,
      twitterLink,
    } = body;
    // find user
    const currentUser = await User.findOne({ _id: id });
    //    check if user is found
    if (!currentUser) {
      return new Response.json(errorhandler("user Not Found"));
    }
    // confirm data presence
    if (body?.avatarImage) currentUser.avatarImage = avatarImage;
    if (body?.name) currentUser.name = name;
    if (body?.userName) currentUser.userName = userName;
    if (body?.about) currentUser.about = about;
    if (body?.occupation) currentUser.occupation = occupation;
    if (body?.location) currentUser.location = location;
    if (body?.email) currentUser.email = email;
    if (body?.linkUrl) currentUser.linkUrl = linkUrl;
    if (body?.linkName) currentUser.linkName = linkName;
    if (body?.instaUsername) currentUser.instaUsername = instaUsername;
    if (body?.instaLink) currentUser.instaLink = instaLink;
    if (body?.twitterUsername) currentUser.twitterUsername = twitterUsername;
    if (body?.twitterLink) currentUser.twitterLink = twitterLink;
    const result = await currentUser.save();
    // return Response
    return Response.json(responsehandler(result));
  } catch (error) {
    // handle Error
    const err = errorhandler(error);
    return new Response.json(err);
  }
}
