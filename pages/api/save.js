// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GoogleSpreadsheet } from "google-spreadsheet";

export default async (req, res) => {
  const data = JSON.parse(req.body);
  const doc = new GoogleSpreadsheet('1HeMo3clfYGgPTO0gJESW61TxVi7BuiiFQPsluEtyYS0');

  try {
    await doc.useServiceAccountAuth({
      client_email: 'main-640@rohini-experiments.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQg1hdd5jT6x+X\n5f0BM15wthD4ysUHRbzamzM0RKCDoIuA8UumNw3Pod1aDx8f/K4NstXF0B7AZl1d\nsWWPRdosGphnFVceRjpCfY+PyWmQjZcSCmCXjh0IVuJy2h+Ig6j0glECayqHKZ/n\nht4lWvx7WJWED+KWRYUrvtb3XtF7cEz2daBYYF69O9od/nztDQon2HMBKE/WlYsk\n5EPqoY//BlicWVTD+dluVVZgveGxmxP/6Bu5xTqWrj0qHQuqBMt/ZU5B6BEQvJvR\n7vIid5a5sf6v0S1A2KMDKRZyxzYXPp0MJDFntf6VKSiieRxM6ZiC5yYBJxzsgXE/\nM+vYJJvlAgMBAAECggEAB1VnSTpInMN7Q/tpz53/51Tv+eAf1+ajAslMnrz/LEH8\nRhe2gm0TRkc6Is2/WX+om4C7tg5g1oGDLSVtHgHl74Er9QwyGTV9HROPdg4ucVAZ\njR/iT9JGwSFVK5byXvnKencO5FfikghrwFfk/klZ8fimoZNxc7mUOnqm0uJ52a6E\nMpA5nzTRjUh2lIB1YFBUF++9vhEzAaoUjuTaYnTtdiZZT31xh2wzyoIcxiJPvte+\nKpLDlk3uBfc/U0huz5Sul68pC5udQH7PwPzx0L9n4PTCdpLUvZKxYeYOUIch8ek5\nbO3IcYt2F5hbKn+NjNEsVgb68n9iBDrUGnmIbKuxLQKBgQDwhZPu24/mSacqd2ki\nT2fu7oFzSa9Zj+AtvA0TbRkI1KpFivrggcpxjtC3GIFMrLbi1eONnWMVTVBTFmyn\nPr5ISSK+IjB99oIdAcUNip40w4gyS6Z1jcIW+u3Okpd8wImQFZGrLaLNqMLKjQio\n1iJRtuEMOcNiKPvRiMF3QPERxwKBgQDd7nJjQFjh8zC+pemqDRLm/reMV/cCnoyw\n7oPAD29v1Wrn4dyCKAERnACl6ygMgXMhBl/UvUGRXMXWP7Jhh6ceNxCdXbpd5CJB\nh1cBnWCy4uDlAp73LsOWhHZXsWEYLnvQ3HMNWqCA4ekBB3n/QEb7XO0A2QMMN0RI\nKVOXVKlk8wKBgQDmwYE4PHZGnos+9ulq/Xvdg/22Og99gce2mSCCbr0B9+aUac5f\n7qXnZPlhcKU8hse/wS1cBI+3NEHINU9w9YVhnKk0eWDEuOgEJFqFr2Qxgxb8ChBd\n3+9CVOQquAGWsrJIBimHbXUwkqSv57dTJH4wn6AyNoj5eBCA6w+R9kBSqQKBgQDY\ng2WDYOaV4Uzf4jt5VHHpe/0T5Umte4Lkpn1QpX5hS4OVn+sh6+dHB7w2IpoawTvR\nr0dU5CKQr0KvR8s+jTpEJxKFhEhqi0PETEZc4+3P97nSkmEF49CbCrXtzbZdAhR3\namqwT4cg1cUc5O9nT40wc7MgzZbElzJ9eBv+GnF8cwKBgHBZimPNBcaj5eKXk+cS\ndI+KFVDeq4WfikYkDipoEPZOiOb3gF5mWyLJ8GqDsRq4TlKjMIGYNdcYCqJaNsKG\nOwuIczt1ouu6hAXtHyzakm/Xge1BCBHd4KuGFu4/Bpz7Ntami44WxPBkMJ/I9O69\nUBAjSYqWYcPvXNvBr2XaeuJz\n-----END PRIVATE KEY-----\n',
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[0];
    await sheet.addRow({
      Username: data.username,
      BlockOrder: data.blockOrder.toString(),
      Ratings: data.ratings.toString(),
      BlockOrderRatings: data.blockOrderRatings.toString(),
      BlockBeginTimestamps: data.blockBeginTimestamps.join(', '),
      BlockEndTimestamps: data.blockEndTimestamps.join(', '),
      PictureBeginTimestamps: data.pictureBeginTimestamps.join(', '),
      PictureEndTimestamps: data.pictureEndTimestamps.join(', '),
      TaskBeginTimestamp: data.taskBeginTimestamp,
      TaskEndTimestamp: data.taskEndTimestamp,
      ServerTaskEndTimestamp: Date.now(),
    });

    res.statusCode = 200;
    res.json({});
  } catch (e) {
    console.log('Unexpected error while saving to spreadsheet: ', e);
    res.statusCode = 500;
    res.json({});
  }
}
