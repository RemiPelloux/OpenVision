
/* Address: 0x1800060f0; Evidence: ev_dcb85e269e2766c347367c8e6227e4a4523a37b8f9d058ab920a2df56a36b4ec */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_18001b000 & 0x3f;
  uVar3 = DAT_18001b000 ^ DAT_18001c250;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001c250 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_18001b000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

