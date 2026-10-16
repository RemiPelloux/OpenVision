
/* Address: 0x180001270; Evidence: ev_fec1818d22e78a983233e6a821bef4f8ce985c3dfddf4b34a586b92e848275a3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180001270(undefined8 *param_1)

{
  int iVar1;
  ulonglong uVar2;
  undefined1 auStack_98 [32];
  uint local_78 [4];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  if (param_1[1] == 0) {
    uVar2 = 0;
  }
  else {
    iVar1 = napi_typeof(*param_1,param_1[1],local_78);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,*param_1);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
    uVar2 = (ulonglong)local_78[0];
  }
  return CONCAT71((int7)(uVar2 >> 8),(int)uVar2 == 4);
}

