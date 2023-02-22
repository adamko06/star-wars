import React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/lyrics' && (
        <div className={styles.footer}>
          <Link href='/lyrics'>
            <a className={styles.footer_lyrics}><span></span>Lyrics<span></span></a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Footer;
