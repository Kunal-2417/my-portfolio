"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaLeetcode } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Kunal-2417" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/gagan-singh-01b834222/" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/Gagan_2417/" },
    { icon: <SiCodeforces />, path: "https://codeforces.com/profile/Gagan2417" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    
                </Link>
            ))}
        </div>
    );
};

export default Social;
