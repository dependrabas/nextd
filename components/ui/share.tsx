import { Facebook, Twitter, Whatsapp } from 'react-quick-share';

export const SocialMediaShare = () => {
    const url = 'www.the-url-you-want-to-share.com';

    return (
        <>
            <Facebook url={url}>
                <span className="up-to-you">Facebook</span>
            </Facebook>
            <Twitter url={url}>
                <span className="up-to-you">Twitter</span>
            </Twitter>
            <Whatsapp url={url}>
                <span className="up-to-you">Whatsapp</span>
            </Whatsapp>
        </>
    );
};