import React from 'react';
import classes from "./GoogleMaps.module.scss"

const Index = () => {
    return (
        <div className={classes.body}>
            <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.2290977027244!2d25.59808164653333!3d49.551377179728455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12451f44b48b5a79!2zwqvQk9C10LvRjCDQu9Cw0LosINCT0LXQu9GMINC00LvRjyDQvdCw0YDQvtGJ0LXQvdC90Y8sINCS0ZbRlyBWaXZpZW5uZSwgS29kaSDCu9Ci0LXRgNC90L7Qv9GW0LvRjCDQvNCw0LPQsNC30LjQvSDQnNCw0LPRltGPINCa0YDQsNGB0Lg!5e0!3m2!1suk!2sua!4v1663513283750!5m2!1suk!2sua"
                referrerPolicy="no-referrer-when-downgrade"
                width="600" height="450"
                allowFullScreen="" loading="lazy"
            ></iframe>
        </div>
    );
};

export default Index;