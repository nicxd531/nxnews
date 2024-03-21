import {
  errorhandler,
  responsehandler,
  validateAllOnce,
} from "../../../../../utils/common";
import Post from "../../../../../models/Post";
import slugify from "slugify";
import { dbConnect } from "../../../../../lib/db-connect";

export async function POST(req, ctx) {
  // function for creating post
  // converting request and distructuring body
  const body = await req.json();
  const mainHeading = body.mainHeading;
  const cP = body.cP;
  const categories = body.categories;
  // confirming it a post request, if it not return invalid request
  if (req.method !== "POST") {
    return new Response.json(errorhandler("Invalid Request type"));
  } else {
    // and it request is valid ,if user not found return access denied
    try {
      const Access = "Access denied";
      if (!body.user) {
        errorhandler({ Access, res });
      } else {
        // validate main heading ,categories and cp ,connect to data base ,slugigy,add new post with body and new slug and save post
        validateAllOnce({ mainHeading, categories, cP });
        await dbConnect();
        const slug = slugify(body.mainHeading, { remove: /[*+~.()'"!:@]/g });
        const post = new Post({
          ...body,
          slug: slug.toLowerCase(),
        });
        const savePost = await post.save();
        // if save post is true handle response and if save post is false handle error and return response
        if (savePost) {
          return Response.json(responsehandler({ savePost, body }));
        } else {
          return Response.json(errorhandler({ savePost, body }));
        }
      }
    } catch (error) {
      // if error occurs handle the error and return a response
      const err = errorhandler({ error, body });
      return Response.json(err);
    }
  }
}
