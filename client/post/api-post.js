const listNewsFeed = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/posts/feed/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listByUser = async (req, res) => {
  try {
    let posts = await Post.find({ postedBy: req.profile._id })
      .populate("comments.postedBy", "_id name")
      .populate("postedBy", "_id name")
      .sort("-created")
      .exec();
    res.json(posts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const create = async (params, credentials, post) => {
  try {
    let response = await fetch("/api/posts/new/" + params.userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: post,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const like = async (params, credentials, postId) => {
  try {
    let response = await fetch("/api/posts/like/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({ userId: params.userId, postId: postId }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const comment = async (params, credentials, postId, comment) => {
  try {
    let response = await fetch("/api/posts/comment/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({
        userId: params.userId,
        postId: postId,
        comment: comment,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default { listNewsFeed, listByUser, create, like };
