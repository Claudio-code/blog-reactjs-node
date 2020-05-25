import * as Yup from 'yup';

class PostValidations {
  async store(req, res, next) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
      author: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Post Validations fails in creation' });
    }

    return next();
  }
}

export default new PostValidations();
