import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
/* Library */

import profile from '../../../static/asset/png/profile.png';
import ArrowSmall from '../../../static/asset/svg/ArrowSmall';
/* Static */

import styles from './MyPageContainer.module.scss';
import Car from '../../../static/asset/svg/Car';
import Camera from '../../../static/asset/svg/Camera';
/* StyleSheets */

import { useDialog } from '../../../hooks/useDialog';
/* Hooks */

import { Paths } from '../../../paths'
import { useSelector } from 'react-redux';
/* Paths */


const MyPageContainer = () => {

    const history = useHistory();
    const openDialog = useDialog();
    const getUserInfo = useSelector(state => state.user);
    const fileRef = useRef();

    return (
        <div className={styles['container']}>
            <div className={styles['user-area']}>
                <div className={styles['img-wrap']}>
                    <img src={profile} alt="프로필 사진" />
                    <div className={styles['camera']} onClick={() => fileRef.current.click()}>
                        <input type="file" className={styles['input-file']} ref={fileRef} />
                        <Camera />
                    </div>
                </div>
                <div className={styles['right-wrap']}>
                    <Link to={Paths.main.mypage.update.name}>
                        <div className={styles['name-wrap']}>
                            <div className={styles['user-name']}>
                                <span>스페이스</span>
                            </div>
                            <ArrowSmall rotate={90} />
                        </div>
                    </Link>
                    <Link to={Paths.main.mypage.update.enrollment}>
                        <div className={styles['enroll-wrap']}>
                            <div className={styles['enroll']}>
                                <Car />
                                <span> 차량 등록관리</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles['mypage-area']}>
                <Link to={Paths.main.parking.manage}>
                    <div className={styles['parking-wrap']}>
                        <div className={styles['text']} >
                            <span>내주자창 관리</span>
                            <ArrowSmall rotate={90} />
                        </div>
                    </div>
                </Link>
                <Link to={Paths.main.use.list}>
                    <div className={styles['use-wrap']}>
                        <div className={styles['text']} >
                            <span>이용내역 관리 항목</span>
                            <ArrowSmall rotate={90} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles['info-area']}>
                <Link to={Paths.main.mypage.update.hp}>
                    <div className={styles['hp-wrap']}>
                        <div className={styles['text']} >
                            <span>휴대폰번호</span>
                            <span className={styles['user-text']}>010-8885-7406</span>
                            <ArrowSmall rotate={90} />
                        </div>
                    </div>
                </Link>
                <div className={styles['email-wrap']}>
                    <div className={styles['text']} >
                        <span>이메일 주소</span>
                        <span className={styles['user-text']}>space@naver.com</span>
                    </div>
                </div>
                <Link to={Paths.main.mypage.update.birthday}>
                    <div className={styles['birthday-wrap']}>
                        <div className={styles['text']} >
                            <span>생년월일</span>
                            <span className={styles['user-text']}>1992년 6월 25일</span>
                            <ArrowSmall rotate={90} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles['password-area']}>
                <Link to={Paths.main.mypage.update.password}>
                    <div className={styles['password-wrap']}>
                        <div className={styles['text']} >
                            <span>비밀번호 변경</span>
                            <ArrowSmall rotate={90} />
                        </div>
                    </div>
                </Link>
            </div>
            <Link to={Paths.main.mypage.withdraw}>
                <div className={styles['withdraw-area']}>
                    <div className={styles['withdraw-wrap']}>
                        <span>회원탈퇴</span>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default MyPageContainer;