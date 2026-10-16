
/* Address: 0x180008f80; Evidence: ev_6bfc1253c13efe717f47ffa234c0d42f847c1dfe1622dc80e332754917f8159c */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180019000 & 0x3f;
  uVar3 = DAT_180019000 ^ DAT_18001aa88;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001aa88 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180019000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

