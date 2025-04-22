{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('startGame').addEventListener('click', () => \{\
  const players = parseInt(document.getElementById('playerCount').value);\
  const decks = parseInt(document.getElementById('deckCount').value);\
  const track = parseInt(document.getElementById('trackLength').value);\
\
  console.log('Players:', players);\
  console.log('Decks:', decks);\
  console.log('Track Length:', track);\
\
  // TODO: Initialize player chips, deck, track, and game logic\
\
  document.getElementById('setup-screen').style.display = 'none';\
  document.getElementById('game-screen').style.display = 'block';\
\});\
}