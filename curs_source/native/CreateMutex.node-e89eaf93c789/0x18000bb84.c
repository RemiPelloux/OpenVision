
/* Address: 0x18000bb84; Evidence: ev_f9bc328075942bb0bea5a95040be3519f905b1a2057c8da277b2e958baf5c6df */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180023430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

