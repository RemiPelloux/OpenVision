
/* Address: 0x18000b100; Evidence: ev_ed4a55e3b0cea44f6222a522be85f5d815dddf816e2799cf4354cbde9ff26f1a */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180022000 & 0x3f;
  uVar3 = DAT_180022000 ^ DAT_1800232f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800232f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180022000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

