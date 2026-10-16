
/* Address: 0x18000d064; Evidence: ev_80904c985ddc2becbb0362803bfb05ae099f1a94468d9273be5f4961e4472086 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d0eb) */
/* WARNING: Removing unreachable block (ram,0x00018000d0c8) */

void FUN_18000d064(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000d20c();
  if (bVar1) {
    (*DAT_18001bb08)(&DAT_18001bb18);
  }
  else {
    do {
    } while (DAT_18001bb18 != 0);
    LOCK();
    DAT_18001bb18 = 1;
    UNLOCK();
  }
  FUN_18000d3e0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000d3e0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000d20c();
  if (bVar1) {
    (*DAT_18001bb10)(&DAT_18001bb18);
  }
  else {
    DAT_18001bb18 = 0;
  }
  return;
}

