import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedIntro = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
        strings: [
            '<span class="text-blue-500">Software Developer.</span>',
            '<span class="text-red-500">Web Developer</span>',
            '<span class="text-green-500">UI/UX Engineer</span>',
            '<span class="text-yellow-500">Devops Engineer</span>',
            '<span class="text-purple-500">Cloud Engineer</span>',
          ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      contentType: 'html',
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className='text-3xl font-serif font-bold' ref={typedRef} />
    </div>
  );
};

export default TypedIntro;