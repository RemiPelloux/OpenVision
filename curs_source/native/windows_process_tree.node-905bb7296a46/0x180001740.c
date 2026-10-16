
/* Address: 0x180001740; Evidence: ev_16b80ebb08491dcf81fa1167752b50be003755d8eb47178ee85ce932fb354997 */

void FUN_180001740(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

