
/* Address: 0x1800092bc; Evidence: ev_e03b83c1140a53a6176e70c25a6e5549ae5fe5bbc873ca56363a1a890cbcfb89 */

ulonglong FUN_1800092bc(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001baa0 ^ DAT_18001a000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

