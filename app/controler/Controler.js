
class CompanyController {

  showCompany(req, res) {
    console.log(req.url);
    const { name } = req.params;
    const companies = [
      { slug: 'PJ', name: '5min4spine' },
      { slug: 'brukmode', name: 'Bruk Bet Mode' },
    ];
  
    const company = companies.find(x => x.slug === name);
  
    res.render('pages/company', { 
      name: company?.name,
      companies,
      title: company?.name ?? 'Brak wyników',
      url: req.url
    });
  }
  
}

module.exports = new CompanyController();