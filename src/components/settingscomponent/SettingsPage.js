"use client"
import React, { useState, useEffect } from 'react'
import { Switch, cn } from "@nextui-org/react";
import { useSettings } from '../../lib/store';
import { useStore } from "zustand";
import { useTitle } from '@/lib/store';
import { signIn, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';

const SwitchSetting = ({ value, onValueChange }) => {
    return (
        <Switch
            isSelected={value}
            onValueChange={(newValue) => onValueChange(newValue)}
            classNames={{
                base: cn(
                    "inline-flex flex-row-reverse w-full bg-none hover:bg-none items-center",
                    "justify-between cursor-pointer rounded-lg gap-2 py-4 border-none border-transparent",
                    "data-[selected=true]:border-primary",
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn("w-6 h-6 border-2 shadow-lg",
                    "group-data-[hover=true]:border-primary",
                    "group-data-[selected=true]:ml-6",
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-4",
                ),
            }}
        />
    );
};


function SettingsPage() {
    const settings = useStore(useSettings, (state) => state.settings);
    const [loading, setLoading] = useState(false);
    const animetitle = useStore(useTitle, (state) => state.animetitle);
    
    const handleToggle = () => {
        if (animetitle === 'english') {
            useTitle.setState({ animetitle: 'romaji' })
        } else {
            useTitle.setState({ animetitle: 'english' })
        }
    };
        const handleClearLocalStorage = () => {
          localStorage.clear(); // Clear all stored data
        };
        
        const handleThemeChange = (event) => {
            const selectedTheme = event.target.value;
            // Apply the selected theme to the site's CSS
            // For example, you can update CSS variables or apply different classes based on the selected theme
            // Example:
            if (selectedTheme === 'default') {
                document.documentElement.style.setProperty('color', '#ffffff'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#000000');
                document.cookie = "selectedTheme=default; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
              else if (selectedTheme === 'st') {
                document.documentElement.style.setProperty('color', '#F0C335'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#10151E');
                document.cookie = "selectedTheme=purple; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
                            }
           else if (selectedTheme === 'purple') {
              document.documentElement.style.setProperty('color', '#8e50cc'); // Update primary color CSS variable
              document.documentElement.style.setProperty('background-color', '#14101E');
              document.cookie = "selectedTheme=purple; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
            } else if (selectedTheme === 'blue') {
              document.documentElement.style.setProperty('color', '#027AEF'); // Update primary color CSS variable
              document.documentElement.style.setProperty('background-color', '#10151E');
              document.cookie = "selectedTheme=blue; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
            }
            else if (selectedTheme === 'green') {
                document.documentElement.style.setProperty('color', '#02EF12'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#111E10');
                document.cookie = "selectedTheme=green; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
              else if (selectedTheme === 'pink') {
                document.documentElement.style.setProperty('color', '#EF02ED'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#1E101C');
                document.cookie = "selectedTheme=pink; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
              else if (selectedTheme === 'yellow') {
                document.documentElement.style.setProperty('color', '#F0C335'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#1E1C10');
                document.cookie = "selectedTheme=yellow; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
              else if (selectedTheme === 'red') {
                document.documentElement.style.setProperty('color', '#C12727'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#1E1210');
                document.cookie = "selectedTheme=red; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
              else if (selectedTheme === 'orange') {
                document.documentElement.style.setProperty('color', '#D28525'); // Update primary color CSS variable
                document.documentElement.style.setProperty('background-color', '#1E1610');
                document.cookie = "selectedTheme=orange; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Save the selected theme in a cookie
              }
          };
    return (
        <div>
            <div className='relative h-[240px] md:h-[340px]'>
                <div className='absolute w-full h-full' style={{ backgroundImage: `url('/watchnow.png')`, backgroundPosition: "center", backgroundSize: "cover", height: "100%" }}></div>
                <div className='bg-gradient-to-t from-black from-2% to-transparent absolute h-[101%] w-full z-[4] bottom-[-1px] inset-0'></div>
                <div className='absolute left-[2%] lg:left-[7%] xl:left-[9.5%] bottom-6 lg:bottom-10  z-[6] text-[35px] text-bold flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 hover:animate-spin">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Settings</div>
            </div>
            <div className='max-w-[94%] md:max-w-[95%] lg:max-w-[85%] xl:max-w-[80%] mx-auto min-h-[58vh] flex flex-col gap-6 mt-5'>
                {loading ? (
                    <div className=' items-center flex justify-center text-semibold text-[22px]'>Loading...</div>
                ) : (
                    <>
                         <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>Title Language</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'> To switch between Japanese (Romaji) and English titles, simply toggle the language option here. </p>
                            </div>
                            <label className="relative cursor-pointer">
                                {animetitle && (
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={animetitle === 'english'}
                                        onChange={handleToggle}
                                    />
                                )}
                                <div className="w-[40px] text-xs h-4 flex items-center bg-[#EAEEFB] rounded-full  peer-checked:text-[#18181b] text-[black] font-bold after:flex after:items-center after:justify-center peer after:content-['JP'] peer-checked:after:content-['EN'] peer-checked:after:translate-x-3/4 after:absolute peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#EAEEFB]">
                                </div>
                            </label>
                        </div>
                      <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>Homepage Trailer</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'> Toggle this feature to stop video previews on homepage. Enabled by default for a streamlined experience, consumes more data. </p>
                            </div>
                            <SwitchSetting
                                value={settings.herotrailer}
                                onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings, herotrailer: value } })}
                            />
                        </div>
                        <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>AutoSkip</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>Experience uninterrupted content with our autoskip feature! It automatically skips through intros, outros, so you can enjoy without clicking.</p>
                            </div>
                            <SwitchSetting
                                value={settings.autoskip}
                                onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings, autoskip: value } })}
                                />
                        </div>
                        <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>AutoPlay</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>Let the entertainment roll with our autoplay feature! No need to press play—the next video starts automatically, ensuring a seamless viewing experience.</p>
                            </div>
                            <SwitchSetting
                                value={settings.autoplay}
                                onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings, autoplay: value } })}
                            />
                        </div>
                        <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>AutoNext</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>Experience non-stop entertainment with our autonext feature! It automatically plays the next video, so you can enjoy a continuous streaming experience without lifting a finger.</p>
                            </div>
                            <SwitchSetting
                                value={settings.autonext}
                                onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings, autonext: value } })                            }
                            />
                        </div>
                        <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between'>
                            <div className='mr-4 w-full'>
                                <p className='text-[18px] md:text-[21px] font-medium'>Mute Audio</p>
                                <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>Choose whether to mute the audio or not.</p>
                            </div>
                            <SwitchSetting
                                value={settings.audio}
                                onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings, audio: value } })                            }
                            />
                        </div>
                        <div className='flex flex-col w-[100%]'>
                            <p className='text-[15px] md:text-[21px] font-medium mb-2'>Load Strategies</p>
                            <p className='text-[11px] md:text-[13px] text-[#bfc6d0] line-clamp-3'>
                            Automatically determines when the video or poster image starts loading. Loading too early can slow down your app, so choose carefully.
                                    </p>
                            <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between mb-3'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>1&#41; Idle (Recommended)</p>
                                </div>
                                <SwitchSetting
                                    value={settings.load === 'idle'}
                                    onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings,  load: value ? 'idle' : settings.load } })                            }
                                />
                            </div>
                            <div className='flex items-center w-[100%] justify-between mb-3'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>2&#41; Visible (Normal)</p>
                                                                </div>
                                <SwitchSetting
                                    value={settings.load === 'visible'}
                                    onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings,  load: value ? 'visible' : settings.load } })                            }
                                />
                            </div>
                            <div className='flex items-center w-[100%] justify-between'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>3&#41; Eager (Fast, Advanced)</p>
                                </div>
                                <SwitchSetting
                                    value={settings.load === 'eager'}
                                    onValueChange={(value) => useSettings.setState({ settings: { ...useSettings.getState().settings,  load: value ? 'eager' : settings.load } })                            }
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-[100%]'>
                            <p className='text-[18px] md:text-[21px] font-medium mb-2'>Appearance</p>
                            <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between mb-3'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>Themes (Beta)</p>
                                    <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>
                                        Change the app's theme | Request more themes in our Discord!
                                    </p>
                                </div>
                          <select className="bg-[#FFFFFF] text-black text-xs font-bold px-2 py-1 rounded-md"  onChange={handleThemeChange}>
                            <option value="">ThemeManager</option>
                            <option value=""></option>
                            <option value="">Special Themes:</option>
                            <option value="st">☀️ Summer Times</option>
                            <option value=""></option>
                            <option value="default">Default</option>
                            <option value="purple">Beerus Purple</option>
                          <option value="blue">Doraemon Blue</option>
                          <option value="green">Zoro Green</option>
                          <option value="pink">Kurama/Dennis Pink</option>
                          <option value="yellow">Sailor Moon Yellow</option>
                          <option value="red">Sakuragi Red</option>
                          <option value="orange">Naruto Orange</option></select>
                            </div>
                       </div>
                        <div className='flex flex-col w-[100%]'>
                            <p className='text-[18px] md:text-[21px] font-medium mb-2'>
Privacy & Account</p>
                            <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between mb-3'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>Clear Local Storage/Cache (Beta)</p>
                                    <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>
                                        Clears Watch History in your device. Doesn't logs out your account
                                    </p>
                                </div>
                                <button className="bg-[#bf1e07] text-black text-xs font-bold px-2 py-1 rounded-md" onClick={handleClearLocalStorage}>Clear Local Storage </button>
                            </div>
                            <div className='mx-3 bg-[#1a1a1f] text-xs font-bold px-5 py-3 rounded-lg flex items-center w-[100%] justify-between mb-3'>
                                <div className='mr-4 w-[100%] ml-4 md:ml-6 mx-auto'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>Log out</p>
                                    <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'>
                                    Log out of your account
                                    </p>
                                </div>
                                <button className="bg-[#bf1e07] text-black text-xs font-bold px-2 py-1 rounded-md" onClick={() => signOut('AniListProvider')}>Log out </button>
                            </div>
                        </div>
                        <div className='flex flex-col w-[100%]'>
                            <p className='text-[18px] md:text-[21px] font-medium mb-2'>App Information</p>
                        <div className='mx-3 bg-[#1a1a1f] px-5 py-3 rounded-lg text-bold flex flex-row items-center'>
                <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
                    <p className='text-[11px] md:text-[13px] text-[#bfc6d0] lg:max-w-[55%] line-clamp-3'> Official Domains are: skyanime-x-1anime.co, skyanime-x-1anime.info, animeyee.lol (Proxy)</p></div>
                  </div>  </>
                )}
            </div>
        </div>
    )
}

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };  

export default SettingsPage
