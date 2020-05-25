import * as Yup from 'yup';

class ContactValidations {
  async store(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      phone: Yup.string().required(),
      post: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Contact Validations fails in creation' });
    }

    return next();
  }
}

export default new ContactValidations();
